export default function Features() {
  return (
    <section className="bg-gray-50 px-6 md:px-20 py-10">
      <h2 className="text-xl font-semibold mb-6">Order in Bulk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-green-600 text-3xl mb-2">📅</div>
          <h3 className="font-bold mb-1">Flexible Schedules</h3>
          <p className="text-sm text-gray-600">Set up daily or weekly delivery timings</p>
        </div>
        <div className="text-center">
          <div className="text-green-600 text-3xl mb-2">📋</div>
          <h3 className="font-bold mb-1">Custom Instructions</h3>
          <p className="text-sm text-gray-600">Provide specific delivery preferences</p>
        </div>
        <div className="text-center">
          <div className="text-green-600 text-3xl mb-2">💸</div>
          <h3 className="font-bold mb-1">Payment Options</h3>
          <p className="text-sm text-gray-600">Pay via UPI, wallets, or bank transfer</p>
        </div>
      </div>
    </section>
  );
}
