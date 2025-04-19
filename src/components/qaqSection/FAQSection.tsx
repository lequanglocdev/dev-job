import { FaQuestionCircle } from "react-icons/fa";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "How our Jobstack work ?",
    answer:
      "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.",
  },
  {
    question: "How to make unlimited data entry ?",
    answer:
      "Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.",
  },
  {
    question: "What is the main process open account ?",
    answer:
      "words is random, the reader will not be distracted from making a neutral judgement on the visual impact.",
  },
  {
    question: "Is Jobstack safer to use with my account ?",
    answer:
      "The most well–known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo–Latin language which more or less corresponds to 'proper' Latin.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Questions & Answers
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Search all the open positions on the web. Get your own personalized
        salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="flex items-start space-x-3">
            <FaQuestionCircle className="text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">{faq.question}</h4>
              <p className="text-gray-500 mt-1">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-20">
        <div>
          <h3>Explore a job now!</h3>
          <p>
            Search all the open positions on the web. Get your own personalized
            salary <br /> estimate. Read reviews on over 30000+ companies
            worldwide.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <Button className="w-[160px]" variant={"destructive"}>Apply Now</Button>
          <Button className="w-[160px]" variant={"default"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
