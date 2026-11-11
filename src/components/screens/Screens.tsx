import { Check, ChevronLeft, Minus, MapPin, Plus, ScanLine, Search, ShoppingBag, Trash2 } from 'lucide-react';
import jollof from '../../assets/jollof.webp';
import friedrice from '../../assets/friedrice.webp';
import { brand } from '../../content';

/* Mini app screens, drawn for a 264 x 550 viewport. */

export function ScreenMenu() {
  const rows = [
    { name: 'Jollof Rice', price: '₦2,000', img: jollof },
    { name: 'Fried Rice', price: '₦2,000', img: friedrice },
  ];
  return (
    <div className="flex h-full flex-col px-4 pt-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1.5 text-[10px] font-semibold">
          <MapPin size={11} className="text-leaf" aria-hidden /> {brand.area}
        </div>
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white">
          <ShoppingBag size={13} aria-hidden />
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-[#E5483A] text-center text-[8px] font-bold leading-[14px] text-white">
            2
          </span>
        </div>
      </div>
      <div className="mt-4 text-[17px] font-bold leading-tight tracking-tight">
        Welcome, <span className="text-leaf">Salahudeen</span>
      </div>
      <div className="mt-3 flex h-9 items-center gap-2 rounded-full border border-line bg-white pl-3 pr-1 text-[10px] text-muted">
        <Search size={12} aria-hidden /> <span className="flex-1">Search for meals</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf text-paper"><ScanLine size={12} aria-hidden /></span>
      </div>
      <div className="mt-3 flex gap-1.5 text-[10px] font-semibold">
        <span className="rounded-full bg-leaf px-3 py-1.5 text-paper">All</span>
        <span className="rounded-full bg-[#F1EFE7] px-3 py-1.5">Rice</span>
        <span className="rounded-full bg-[#F1EFE7] px-3 py-1.5">Drinks</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between gap-2 rounded-[18px] border border-line bg-white p-2.5">
            <div>
              <div className="text-[12px] font-semibold">{r.name}</div>
              <div className="mt-0.5 text-[11px] font-bold text-leaf">{r.price}</div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-[10px] font-semibold text-leaf">
                <Plus size={10} aria-hidden /> Add
              </div>
            </div>
            <img src={r.img} alt="" className="h-[64px] w-[74px] rounded-[14px] object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-3 bottom-3 flex h-11 items-center justify-between rounded-full bg-leaf px-4 text-[11px] font-semibold text-paper shadow-lg">
        Proceed to order <span className="font-bold">₦9,000</span>
      </div>
    </div>
  );
}

export function ScreenPay() {
  return (
    <div className="flex h-full flex-col px-4 pt-9">
      <div className="flex items-center gap-2 text-[14px] font-bold">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white">
          <ChevronLeft size={14} aria-hidden />
        </span>
        Payment
      </div>
      <div className="mt-4 rounded-[20px] bg-leaf p-4 text-paper">
        <div className="text-[10px] opacity-75">Amount to pay</div>
        <div className="mt-1 text-[28px] font-bold leading-none tracking-tight">₦9,000</div>
        <div className="mt-3 text-[10px] opacity-75">Pickup at 15:45 · {brand.kitchen}</div>
      </div>
      <div className="mt-4 text-[11px] font-semibold text-muted">Payment method</div>
      <div className="mt-2 flex items-center gap-3 rounded-[16px] border-2 border-leaf bg-white p-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-mint text-[13px] font-bold text-leaf">M</span>
        <div className="flex-1">
          <div className="text-[12px] font-semibold">Moniepoint</div>
          <div className="text-[10px] text-muted">Pay securely in the app</div>
        </div>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-paper">
          <Check size={11} strokeWidth={3} aria-hidden />
        </span>
      </div>
      <div className="absolute inset-x-3 bottom-3 flex h-11 items-center justify-center rounded-full bg-leaf text-[12px] font-semibold text-paper shadow-lg">
        Place order · ₦9,000
      </div>
    </div>
  );
}

export function ScreenTrack() {
  const steps = [
    { t: 'Order received', time: '15:13', done: true },
    { t: 'Payment confirmed', time: '15:14', done: true },
    { t: 'Confirmed by the kitchen', time: '15:15', done: true },
    { t: 'Preparing your order', time: 'Now', current: true },
    { t: 'Ready for pickup', time: '' },
    { t: 'Picked up', time: '' },
  ];
  return (
    <div className="flex h-full flex-col px-4 pt-9">
      <div className="text-[14px] font-bold">Orders</div>
      <div className="mt-3 rounded-[20px] bg-amber/15 p-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold text-[#8a5a06]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping2 rounded-full bg-amber" />
            <span className="relative h-2 w-2 rounded-full bg-amber" />
          </span>
          In the kitchen
        </div>
        <div className="mt-1 text-[22px] font-bold leading-tight tracking-tight">Ready in 20 mins</div>
      </div>
      <ol className="mt-4 flex flex-col">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] ${
                  s.done ? 'bg-leaf text-paper' : s.current ? 'bg-amber text-white' : 'border-2 border-line bg-white'
                }`}
              >
                {s.done && <Check size={10} strokeWidth={3} aria-hidden />}
              </span>
              {i < steps.length - 1 && <span className={`h-5 w-0.5 ${s.done ? 'bg-leaf' : 'bg-line'}`} />}
            </div>
            <div className="flex flex-1 justify-between pb-3 text-[11px]">
              <span className={s.current ? 'font-bold' : s.done ? 'font-medium' : 'text-muted'}>{s.t}</span>
              <span className="font-mono text-[10px] text-muted">{s.time}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ScreenCode() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-leaf px-4 pb-8 pt-10 text-center text-paper">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-paper text-leaf">
          <Check size={22} strokeWidth={3} aria-hidden />
        </span>
        <div className="mt-3 text-[17px] font-bold tracking-tight">Order confirmed</div>
        <div className="mt-0.5 text-[10px] opacity-75">Show this code at the counter</div>
      </div>
      <div className="-mt-5 px-4">
        <div className="rounded-[20px] border border-line bg-white p-4 text-center shadow-soft">
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Pickup code</div>
          <div className="mt-1 font-mono text-[30px] font-medium tracking-[0.04em]">{brand.sampleCode}</div>
          <div className="mx-auto mt-3 flex h-9 items-end justify-center gap-[2px]" aria-hidden>
            {[5, 9, 4, 8, 6, 9, 3, 7, 9, 5, 8, 4, 9, 6, 8, 5, 7, 9, 4, 8].map((h, i) => (
              <span key={i} className="w-[2px] rounded-full bg-ink" style={{ height: h * 3.6 }} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2 text-[11px]">
          <div className="flex justify-between"><span className="text-muted">Pickup time</span><span className="font-semibold">15:45</span></div>
          <div className="flex justify-between"><span className="text-muted">Outlet</span><span className="font-semibold">{brand.kitchen}</span></div>
          <div className="flex justify-between"><span className="text-muted">Total paid</span><span className="font-bold text-leaf">₦9,000</span></div>
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-3 flex h-11 items-center justify-center rounded-full bg-leaf text-[12px] font-semibold text-paper shadow-lg">
        Track my order
      </div>
    </div>
  );
}

export function ScreenCart() {
  const items = [
    { name: 'Jollof Rice', extras: 'Fried Chicken, Plantain', qty: 2, price: '₦6,000', img: jollof },
    { name: 'Fried Rice', extras: 'Beef', qty: 1, price: '₦3,000', img: friedrice },
  ];
  return (
    <div className="flex h-full flex-col px-4 pt-9">
      <div className="flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white">
          <ChevronLeft size={15} aria-hidden />
        </span>
        <span className="text-[14px] font-bold">Cart</span>
        <span className="w-8" />
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-[14px] bg-mint px-3 py-2">
        <MapPin size={14} className="text-leaf" aria-hidden />
        <div className="leading-tight">
          <div className="text-[8.5px] text-[#3E5A39]">Pickup from</div>
          <div className="text-[10.5px] font-semibold">{brand.kitchen} · {brand.area}</div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2.5">
        {items.map((it) => (
          <div key={it.name} className="relative flex gap-2.5 rounded-[18px] border border-line bg-white p-2">
            <img src={it.img} alt="" className="h-[70px] w-[58px] rounded-[12px] object-cover" />
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div className="pr-5">
                <div className="text-[11.5px] font-semibold">{it.name}</div>
                <div className="text-[9px] leading-snug text-muted">{it.extras}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex h-6 items-center gap-1.5 rounded-full bg-mint px-1.5 text-leaf">
                  <Minus size={10} aria-hidden /><span className="text-[10px] font-bold text-ink">{it.qty}</span><Plus size={10} aria-hidden />
                </div>
                <span className="text-[11px] font-bold text-leaf">{it.price}</span>
              </div>
            </div>
            <Trash2 size={12} className="absolute right-2 top-2 text-muted" aria-hidden />
          </div>
        ))}
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full border-[1.5px] border-dashed border-[#A9B8A3] text-[10px] font-semibold text-leaf">
          <Plus size={11} aria-hidden /> Add more items
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-t-[22px] border-t border-line bg-white px-4 pb-4 pt-3">
        <div className="flex items-baseline justify-between text-[10px] text-muted">
          <span>Subtotal (3 items) <b className="ml-1 text-[15px] text-ink">₦9,000</b></span>
          <span className="font-semibold text-[#D8402F]">Clear cart</span>
        </div>
        <div className="mt-2 flex h-10 items-center justify-center rounded-full bg-leaf text-[11.5px] font-semibold text-paper">Proceed to checkout</div>
      </div>
    </div>
  );
}
