export default function MealsDetails({ params }) {
    return(
        <main>
            <h1>Meals Page</h1>
            <p>{params.slug}</p>
        </main>
    )
}