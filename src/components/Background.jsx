export default function Background(props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <img
          src={props.img}
          alt="background"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
}
