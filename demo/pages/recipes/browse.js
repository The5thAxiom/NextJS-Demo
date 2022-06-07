import { useEffect, useState } from 'react';

export default function Browse() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://cookbook-demo-the5thaxiom.herokuapp.com/api/recipes/all')
            .then(res => (res.ok ? res.json() : { recipes: [] }))
            .then(data => setRecipes(data.recipes));
    }, []);
    return (
        <ul>
            {recipes.map((r, i) => (
                <li index={i}>
                    {r.name} by {r.contributor_username}
                </li>
            ))}
        </ul>
    );
}
