interface User {
  name: string,
  message: string,
  position: number[],
  distances?: { [key:string]: number }
}

export default User;
