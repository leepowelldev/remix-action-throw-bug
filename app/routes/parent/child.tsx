import { ActionFunction, useCatch } from 'remix';

export const action: ActionFunction = () => {
  throw new Response('Thrown Response', { status: 418 });
};

export default function IndexChildRoute() {
  return (
    <form method="post">
      <button type="submit">Click to trigger error</button>
    </form>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  return (
    <div>
      {caught.data} | {caught.status}
    </div>
  );
}
