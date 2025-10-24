    const ErrorBoundary = ({error}) => {

        if (error instanceof Error) {
          console.error("ErrorBoundary caught an error:", error);
         
        return  (
            <div className="p-3">
              <h1 className="font-semibold text-2xl md:text-3xl text-center uppercase text-gray-700">Error</h1>
              <p className="font-sans">{error.message}</p>
              <p className="pt-5 text-lg">The stack trace is:</p>
              <pre className="text-red-500">{error.stack}</pre>
            </div>
          );
        } else {
            console.error("ErrorBoundary caught an unknown error:", error);
          return <h1>Unknown Error</h1>;
        }
    }

    export default ErrorBoundary;