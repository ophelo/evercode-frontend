import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a><div>
      <Head>
        <title>Evercode</title>
        <link rel="icon" href="/everCode.ico" />
      </Head>
      <div className="flex ">
        <SideBar />
        <div className=" bg-gray-800 h-screen  w-screen"></div>
      </div>
    </div>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
