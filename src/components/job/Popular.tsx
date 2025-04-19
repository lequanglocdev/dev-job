import { CardList } from "./cardJob/CardList";
import { ListJobs } from "./listJob/ListJobs";

export const Popular = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto px-4 flex flex-col justify-center items-center mt-20">
      <h3 className="text-2xl font-bold text-center">
        Browser Jobs Categories Post
      </h3>
      <p className="text-lg text-center mt-4">
        Post a job to tell us about your project. We'll quickly match you with
        the right freelancers.
      </p>
      <CardList />
      <h3 className="text-2xl font-bold text-center mt-10">
        New & Random Jobs
      </h3>
      <p className="text-lg text-center mt-4">
        Post a job to tell us about your project. We'll quickly match you with
        the right freelancers.
      </p>
      <ListJobs />
    </div>
  );
};
