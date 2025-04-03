import {Button} from "@patternfly/react-core";
import {useSession, getSession, signIn, signOut, SessionProvider} from 'next-auth/react';
import * as React from "react";

const PrivatePage = () => {
    const {data: session, status} = useSession();
    return <>
        {!session && <>
            Not signed in <br/>
            <Button onClick={() => signIn()}>Sign in</Button>
        </>}
        {session && <>
            Signed in as {session.user?.name} ({session.user?.email}) <br/>
            <Button onClick={() => signOut()}>Sign out</Button>
        </>}
    </>
}

export default PrivatePage;
