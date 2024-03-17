import getUserInfo from "@/lib/userInfomation";
import Link from "next/link";

const page = async () => {
  const response = await getUserInfo();
  console.log("response: ", response);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              User Information
            </h5>
            <Link
              href="/logout"
              className="text-xl font-medium text-red-600 hover:underline dark:text-blue-500">
              LOGOUT
            </Link>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="min-w-0 ms-4">
                    <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Name:
                    </p>
                  </div>
                  <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    &nbsp;&nbsp;&nbsp;{response.name}
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="min-w-0 ms-4">
                    <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      User Name:
                    </p>
                  </div>
                  <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    &nbsp;&nbsp;&nbsp;{response.user_name}
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="min-w-0 ms-4">
                    <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Email:
                    </p>
                  </div>
                  <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    &nbsp;&nbsp;&nbsp;{response.email}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
