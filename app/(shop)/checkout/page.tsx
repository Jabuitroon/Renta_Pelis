import PaymentCheckouttForm from '@/components/payment-method/form-payment-method'
import OrderPreview from '@/components/payment-method/OrderPreview'

export default function CheckoutPage() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 font-sans p-6 bg-[#0f1623]'>
      <PaymentCheckouttForm />
      <OrderPreview />
    </section>
  )
}
