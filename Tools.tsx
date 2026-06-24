export default function Tools() {
  const tools = [{ emoji: "", title: "", description: "" }];

  return (
    <div id="phone">
      <h1>Tools</h1>
      {tools.map((registration) => (
        <div>
          <h2>
            {registration.emoji} {registration.title}
          </h2>
          <p>{registration.description}</p>
        </div>
      ))}
    </div>
  );
}
