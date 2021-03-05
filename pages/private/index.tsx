import { Button } from "@patternfly/react-core";
import { useSession, getSession, signIn, signOut } from 'next-auth/client'
import * as React from "react";

const PrivatePage = () => {
  const [session, loading] = useSession();
  return <>
    {!session && <>
      Not signed in <br/>
      <Button onClick={()=>signIn("openshift")}>Sign in</Button>
    </>}
    {session && <>
      Signed in as {session.user.name} ({session.user.email}) <br/>
      <Button onClick={()=>signOut()}>Sign out</Button>
    </>}
  </>
}

export default PrivatePage;