import { LoaderFunction, Outlet } from 'remix';
import { useLoaderData, json } from 'remix';

type IndexData = {
  links: Array<{ name: string; url: string }>;
};

export let loader: LoaderFunction = () => {
  let data: IndexData = {
    links: [
      {
        name: 'Remix Docs',
        url: 'https://remix.run/docs',
      },
      {
        name: 'React Router Docs',
        url: 'https://reactrouter.com/docs',
      },
      {
        name: 'Remix Discord',
        url: 'https://discord.gg/VBePs6d',
      },
    ],
  };

  return json(data);
};

export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {data.links.map((link) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
