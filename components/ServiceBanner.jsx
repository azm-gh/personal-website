import Image from "next/image";

export const softwareSkills = [
  {
    id: 0,
    name: "react",
  },
  {
    id: 1,
    name: "next",
  },
  {
    id: 2,
    name: "nodejs",
  },
];

export const consultingSkills = [
  {
    id: 0,
    name: "Domain research",
  },
  {
    id: 1,
    name: "Mentoring",
  },
  {
    id: 2,
    name: "Coaching",
  },
];

export const SASkills = [
  {
    id: 0,
    name: "Togaf",
  },
  {
    id: 1,
    name: "Archimate",
  },
  {
    id: 2,
    name: "UML",
  },
];

export function ServiceBanner(props) {
  const skillsList = props.skills.map((skill) => (
    <li key={skill.id}>
      <p>{skill.name}</p>
    </li>
  ));

  return (
    <div className="text-center shadow-lg p-10 round-xl my-10 dark:bg-white">
      <div style={{ borderRadius: "5px", overflow: "hidden" }}>
        <Image src={props.soft} width={400} height={300} />
      </div>
      <h3 className="text-lg font-medium pt-8 pb-2">{props.serviceType}</h3>
      <p className="py-2">{props.description}</p>
      <h4 className="py-4 text-teal-600">{props.skill}</h4>
      <div className="text-gray-900 py-1">
        <ul>{skillsList}</ul>
      </div>
    </div>
  );
}
