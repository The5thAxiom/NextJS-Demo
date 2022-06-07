import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/loading';

export default function Recipes() {
    const router = useRouter();
    const { id } = router.query;

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id)
            fetch(
                `https://cookbook-demo-the5thaxiom.herokuapp.com/api/recipes/${id}`
            )
                .then(res => (res.ok ? res.json() : null))
                .then(data => setRecipe(data));
    }, [id]);

    if (recipe)
        return (
            <main>
                <h1>{recipe.name}</h1>
            </main>
        );
    else
        return (
            <main>
                <Loading />
            </main>
        );
}
