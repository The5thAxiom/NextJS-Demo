import { useEffect, useState } from 'react';
import Loading from '../../components/loading';

export async function getStaticProps() {
    const res = await fetch(
        'https://cookbook-demo-the5thaxiom.herokuapp.com/api/recipes/all'
    );
    const data = await res.json();
    return {
        props: { recipes: data.recipes }
    };
}

export default function Browse({ recipes }) {
    if (recipes.length === 0) return <div>no recipes found :(</div>;
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
