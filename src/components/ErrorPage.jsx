const ErrorPage = ({ errResponse }) => {
  
  return (
    <div>
      <h4>Error: {errResponse.status}</h4>
      <p> {errResponse.data.msg} </p>
    </div>
  );
};

export default ErrorPage;
