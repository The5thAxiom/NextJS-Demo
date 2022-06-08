import Head from 'next/head';

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(
        `https://cookbook-demo-the5thaxiom.herokuapp.com/api/recipes/${id}/full`
    );
    const data = await res.json();
    return { props: { recipe: data } };
}

export default function Recipes({ recipe }) {
    return (
        <main>
            <Head>
                <title>{recipe.name}</title>
            </Head>
            <h1>{recipe.name}</h1>
            <br />
            <b>{recipe.vegetarian ? 'veg' : 'non-veg'}</b> {' | '}
            <b>{`takes ${recipe.prep_time} minutes`}</b> {' | '}
            <b>{`makes ${recipe.quantity} ${recipe.unit}`}</b> {' | '}
            <b>{`difficulty: ${'★'.repeat(recipe.difficulty)}`}</b>
            <br />
            <br />
            <em>{recipe.description}</em>
            <br />
            <br />
            <div
                className='recipe-tags'
                style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center'
                }}
            >
                {recipe.recipe_tags.map((t, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: 'lightgray',
                            borderRadius: '10px',
                            color: 'red'
                        }}
                    >
                        {t}
                    </div>
                ))}
            </div>
            <h2>Ingredients</h2>
            <ol style={{ paddingInline: '30%' }}>
                {recipe.recipe_ingredients.map((ing, index) => (
                    <li key={index}>
                        {ing.quantity} {ing.unit} of {ing.english_name} (
                        {ing.hindi_name_devnagari} | {ing.hindi_name_latin})
                    </li>
                ))}
            </ol>
            <h2>Steps</h2>
            <ol style={{ paddingInline: '30%' }}>
                {recipe.recipe_steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </main>
    );
}
