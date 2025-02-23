import CreateUserService from '../../domain/services/create-user-service';

export default async function HandleUserData(formData: FormData) {
  const createUserService = new CreateUserService();

  const name = formData.get('name') as any;
  const email = formData.get('email') as any;
  const password = formData.get('password') as any;
  const location = formData.get('location') as any;

  await createUserService.handle({
    name: name,
    email: email,
    password: password,
    location: location,
  });

  console.log(name, email, password);
}
