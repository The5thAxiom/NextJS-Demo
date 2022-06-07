import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <main>
            <h1>404: Content Not Found</h1>
            <p>Please check if the URL you entered is correct.</p>
        </main>
    );
}
