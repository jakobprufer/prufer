import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorPage">
      <div className="title">Error</div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
