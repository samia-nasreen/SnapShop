import { useSelector } from 'react-redux';
import formatDate from '../../../utils/formatDate';
import { Link } from 'react-router-dom';

const OrdersList = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="ml-2 text-xl font-semibold mb-4">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full px-2 table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-gray-200 text-center rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)]">
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                No. of Items
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                Total Price
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  No orders have been placed yet.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white text-center shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)] hover:shadow-md transform hover:-translate-y-1 transition duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
                  <td className="px-6 py-4">{order.totalQuantity}</td>
                  <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/orders/${order.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
