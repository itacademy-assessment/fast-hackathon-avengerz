function About() {
  const teamMembers = [
    {
      name: "Marc",
      username: "mstne03",
      description: "Desenvolupador full-stack amb passió per la visualització de dades i l’optimització de sistemes. Amant de la F1 i de la ciència.",
    },
    {
      name: "Carlos",
      username: "clos266",
      description: "Especialista en backend i integracions d’API. Apassionat de l’eficiència del codi i de l’arquitectura de sistemes escalables.",
    },
    {
      name: "Anna",
      username: "annahico",
      description: "Dissenyadora UI/UX i desenvolupadora front-end. Li encanta convertir idees en interfícies elegants i funcionals.",
    },
    {
      name: "Edgar",
      username: "edgarpomar",
      description: "Desenvolupador amb orientació DevOps. Li agrada automatitzar processos i garantir desplegaments fluids i fiables.",
    },
    {
      name: "Enric",
      username: "justmove1987",
      description: "Enginyer de programari enfocat en la seguretat i el rendiment. Apassionat per millorar contínuament l’experiència de l’usuari.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre el Equip AvengersZ</h1>
      <p className="text-center text-gray-600 mb-10">
        Aquest projecte ha estat desenvolupat per un equip de cinc membres amb talents complementaris. Coneix-nos!
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div key={member.username} className="bg-white shadow-md p-6 rounded-lg border">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-500">@{member.username}</p>
            <p className="mt-2 text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
