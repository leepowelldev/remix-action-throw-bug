import { ActionFunction, useCatch } from 'remix';

export const action: ActionFunction = () => {
  throw new Response('Thrown Response', { status: 418 });
  // throw new Error('Thrown Error');
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

export function ErrorBoundary() {
  return <div>There was an error. Sorry.</div>;
}
