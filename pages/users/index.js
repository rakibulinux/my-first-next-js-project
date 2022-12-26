const Users = ({ posts }) => {
  console.log(posts);
  return <div>We have {posts.length} Users.</div>;
};

export default Users;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
