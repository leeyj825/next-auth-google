import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const {data : session} = useSession();

    // if(loadingSession){
    //   return <p>Loading...</p>
    // }


    if(session){
      return(
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email : {session.user.email}</h4>
            <br />
            {session.user.image &&(
              <span>
                <img src={session.user.image} alt={session.user.name} />
            </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      );
    }
    return(
      <>
        <button onClick={() => signIn()}>
          Sign In
        </button>
      </>
    );
  }


//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }