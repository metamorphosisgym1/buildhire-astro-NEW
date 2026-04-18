import { useState, useEffect } from "react";
import { Check, Loader2 } from "lucide-react";

interface BookingData {
  machine: string;
  startDate: string;
  endDate: string;
  location: string;
  depositAmount: string;
  totalCost: string;
  customerEmail: string;
}

export default function PaymentSuccess() {
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [notificationFailed, setNotificationFailed] = useState(false);

  useEffect(() => {
    // Try to retrieve booking details from URL params or session storage
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (sessionId) {
      fetch(`/api/booking-details?session_id=${sessionId}`)
        .then((r) => r.json())
        .then((data) => {
          if (data?.booking) {
            setBooking(data.booking);
          } else {
            setNotificationFailed(true);
          }
        })
        .catch(() => setNotificationFailed(true))
        .finally(() => setLoading(false));
    } else {
      setNotificationFailed(true);
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {loading ? (
          <div className="animate-pulse">
            <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Confirming your payment...</p>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Bond Paid — Booking Confirmed!</h1>
            {booking && (
              <div className="bg-card border border-secondary rounded-xl p-6 text-left mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equipment</span>
                    <span className="font-medium text-foreground">{booking.machine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hire Period</span>
                    <span className="font-medium text-foreground">{booking.startDate} → {booking.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">{booking.location}</span>
                  </div>
                  <div className="border-t border-secondary pt-3 flex justify-between">
                    <span className="text-muted-foreground">Bond Paid</span>
                    <span className="font-bold text-primary">${Number(booking.depositAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Balance Due on Delivery & Collection</span>
                    <span className="font-medium text-foreground">
                      ${(Number(booking.totalCost) - Number(booking.depositAmount)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
            {notificationFailed && !booking && (
              <p className="text-muted-foreground text-sm mb-6">
                Your payment was successful. Our team will be in touch shortly to confirm your booking details and arrange delivery & collection.
              </p>
            )}
            {booking && (
              <p className="text-muted-foreground text-sm mb-6">
                A confirmation has been sent to <span className="text-foreground font-medium">{booking.customerEmail}</span>.
                Our team will be in touch shortly to arrange delivery & collection.
              </p>
            )}
            <a
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:scale-[1.02] transition-transform"
            >
              Back to Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
