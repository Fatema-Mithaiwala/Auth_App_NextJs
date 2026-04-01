export default async function UserProfile({ params }: any) {
    const resolvedParams = await params
    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: <span className="text-indigo-500">{resolvedParams.id}</span></p>
        </div>
    );
}