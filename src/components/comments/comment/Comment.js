export default function Comment({id,name,email,body}) {

    return (

        <div>
            <p>
                <b> Id:</b> {id}<br/>
                <b>Name:</b> {name}<br/>
                <b>Email:</b> {email}<br/>
                <b>Body:</b> {body}
            </p>
        </div>
    );
}