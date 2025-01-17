function Chat() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-auto rounded-xl shadow-lg flex items-center gap-x-4">
      <div>
        <div className="shrink-0"></div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default Chat;
