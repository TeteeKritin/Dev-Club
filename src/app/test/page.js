export default function Page(){
    return(
        <>
            <h1>hello world</h1>
            {array.map((prop, index) => (
                <div key={index}>
                    <h1>{prop.name}</h1>
                    <h1>{prop.id}</h1>
                </div>
                ))}
        </>
    )
}

const array = [
    {
        name: 'poon',
        id: '6588048'
    },
    {
        name: 'aa',
        id: '059405940'
    },
]