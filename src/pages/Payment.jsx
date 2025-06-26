import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";



export default function Payment() {
  const navigate = useNavigate();
  const makePayment = async () => {

    const user = localStorage.getItem('user');
    const userJson = JSON.parse(user);
    const fullname = userJson.fullname;
    const email = userJson.email;


    try {
      const response = await apiClient.post("/payment/initiate", { email: email, fullname: fullname }, {
        headers: {
          "Content-Type": "application/json"
        }
      }

      );
      console.log(response.data);
      window.open(response.data.url, '_blank');
      setTimeout(() => {
        navigate('/vendor-dashboard');
      }, 5000);


    } catch (error) {
      console.log(error);
    }

  }


  return (


    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Choose Your Subscription Plan
        </h3>
        <p className="text-gray-600 mb-6">
          Select the plan that best suits your business needs.
        </p>

        <div>
          <button onClick={makePayment} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4"> 3 Months
          </button>
        </div>

        <div>
          <button onClick={makePayment} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4"> 6 Months
          </button>
        </div>

        <div>
          <button onClick={makePayment} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4"> 1 year
          </button>
        </div>

        <SubmitButton
          title={"Cancel"}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
        />
      </div>
    </div>

  );
}
