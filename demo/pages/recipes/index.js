import { useEffect, useState } from 'react';

export default function Browse() {
    const [recipes, setRecipes] = useState(null);
    useEffect(() => {
        fetch('https://cookbook-demo-the5thaxiom.herokuapp.com/api/recipes/all')
            .then(res => (res.ok ? res.json() : { recipes: null }))
            .then(data => setRecipes(data.recipes));
    }, []);

    if (recipes === null) return <div>loading...</div>;
    else if (recipes.length === 0) return <div>no recipes found :(</div>;
    else
        return (
            <main>
                <ol>
                    {recipes.map((r, i) => (
                        <li key={i}>
                            <a href={`/recipes/${r.id}`}>{r.name}</a> by{' '}
                            {r.contributor_username}
                        </li>
                    ))}
                </ol>
            </main>
        );
}
