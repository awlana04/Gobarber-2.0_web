import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

import HTTPResponse from '@/infra/types/http-response';
import {
  AppointmentDataType,
  BarberDataType,
  UserDataType,
} from '@/infra/types/data-type';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

export default class GetAllAppointmentsAPI extends APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {
    super(fetchAPIData);
  }

  public async fake(): Promise<{
    server: HTTPResponse;
    appointments: AppointmentDataType[];
  }> {
    const barber: BarberDataType = await GetCookies('barber');
    const token = await GetCookies('token');

    return await this.fetchAPIData
      .fetch(`/appointments`)
      .then(async (response) => {
        const allAppointments: {
          id: string;
          date: Date;
          userId: string;
          barberId: string;
          createdAt: Date;
          updatedAt: Date;
        }[] = await response.json();

        const users = await this.fetchAPIData
          .fetch('/users')
          .then(async (response) => {
            return (await response.json()) as UserDataType[];
          });

        const barbers = await this.fetchAPIData
          .fetch('/barbers')
          .then(async (response) => {
            return (await response.json()) as BarberDataType[];
          });

        let userData: UserDataType[] = [];
        let barberData: BarberDataType = barbers[0];
        let appointmentData: AppointmentDataType[] = [];

        const barberAppointments = allAppointments.filter(
          (appointment) => appointment.barberId === barber.id
        );

        barberAppointments.map((appointment) => {
          users
            .filter((user) => user.id === appointment.userId)
            .map((user) => {
              if (!userData.find((userStored) => userStored.id === user.id)) {
                userData.push(user);
              }
            });

          barberData = barbers.find(
            (barber) => barber.id === appointment.barberId
          )!;
        });

        userData.map((user) => {
          barberAppointments
            .filter((appointment) => appointment.userId === user.id)
            .map((appointment) => ({
              ...appointment,
              user: user,
              barber: barberData,
            }))
            .map((appointment) => {
              appointmentData.push(appointment);
            });
        });

        return { server: response, appointments: appointmentData };
      });
  }
}
