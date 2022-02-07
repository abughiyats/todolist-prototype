export const Header = (props) => {
  const { users } = props
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="tracking-wide font-bold">Cyber Punk</h2>
        <div className="flex items-center space-x-2">
          <div className="flex flex-row-reverse overflow-hidden">
            {users.map((user, id) => (
              <img
                key={id}
                src={user.img}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              />
            ))}
          </div>
          <button className="border-2 h-6 w-6 rounded-full text-gray-300 hover:text-gray-400/50 hover:border-gray-400/50 hover:font-bold text-sm">
            +
          </button>
        </div>
      </div>
      <div>
        <p className="text-[#C9C9CF]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit, sed do eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
}