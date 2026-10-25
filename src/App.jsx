import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgeHelp,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleUserRound,
  Copy,
  Heart,
  Home,
  IndianRupee,
  Menu,
  Minus,
  Package,
  Plus,
  RotateCcw,
  Search,
  ShoppingCart,
  Shirt,
  Sparkles,
  Star,
  ThumbsUp,
  X,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const defaultProducts = [
  {
    id: 1,
    name: "Plus Size Men's Winter PU Leather Bomber Jacket",
    image: "H82030059b32c43afa71a10714a0476257.webp",
    originalPrice: 7855,
    specialPrice: 196,
    offers: 3,
    extraOff: 243,
    rating: "4.5",
    reviews: "3980",
  },
  {
    id: 2,
    name: "Plus Size Warm Winter Outdoor Fleece Jacket for Men",
    image: "Hf1c08f08a0a54146af0f68fd5ee0eb53p.webp",
    originalPrice: 8599,
    specialPrice: 204,
    offers: 1,
    extraOff: 308,
    rating: "4.0",
    reviews: "5144",
  },
  {
    id: 3,
    name: "L'MONTE Men's Military Stand Collar Bomber Jacket",
    image: "6181PQTqicL._SL1080.jpg",
    originalPrice: 499,
    specialPrice: 433,
    offers: 2,
    extraOff: 219,
    rating: "4.8",
    reviews: "4031",
  },
  {
    id: 4,
    name: "High Quality Men's Tactical Outdoor Cropped Oversized Hoodie",
    image: "Hf509dd21acab465aba97af914ffaefc2t.webp",
    originalPrice: 4599,
    specialPrice: 335,
    offers: 3,
    extraOff: 225,
    rating: "4.8",
    reviews: "3465",
  },
  {
    id: 5,
    name: "TACVASEN Men's Lightweight Casual Bomber Jacket",
    image: "81WpwmcIyOL.jpg",
    originalPrice: 4599,
    specialPrice: 455,
    offers: 3,
    extraOff: 380,
    rating: "4.0",
    reviews: "4367",
  },
  {
    id: 6,
    name: "Trendy Brand Autumn Slim-Fit Men's Bomber Jacket",
    image: "H4f2077d2a9654c4384e4cb81111f96f3Q.webp",
    originalPrice: 4599,
    specialPrice: 345,
    offers: 1,
    extraOff: 309,
    rating: "4.2",
    reviews: "5404",
  },
  {
    id: 7,
    name: "2020 New Winter Men's Cotton Jacket",
    image: "product-image-1647512677-600x600.jpg",
    originalPrice: 499,
    specialPrice: 303,
    offers: 1,
    extraOff: 370,
    rating: "4.5",
    reviews: "1936",
  },
  {
    id: 8,
    name: "2020 Spring Autumn Men's Hoodie Japan Style",
    image: "product-image-1657522367-600x600.jpg",
    originalPrice: 499,
    specialPrice: 274,
    offers: 1,
    extraOff: 143,
    rating: "4.6",
    reviews: "1021",
  },
  {
    id: 9,
    name: "2021 New Spring Men's Jacket Fashion Casual",
    image: "product-image-1712881943-600x600.jpg",
    originalPrice: 499,
    specialPrice: 445,
    offers: 1,
    extraOff: 164,
    rating: "4.4",
    reviews: "4262",
  },
  {
    id: 10,
    name: "2021 Autumn Men's Turtleneck Sweater Pullover",
    image: "product-image-1730932472.jpg",
    originalPrice: 499,
    specialPrice: 168,
    offers: 3,
    extraOff: 404,
    rating: "4.9",
    reviews: "4055",
  },
  {
    id: 11,
    name: "2025 Men Black and Blue Winter Jean Jacket",
    image: "product-image-1624960688-600x600.jpg",
    originalPrice: 499,
    specialPrice: 358,
    offers: 1,
    extraOff: 498,
    rating: "4.5",
    reviews: "3963",
  },
  {
    id: 12,
    name: "ANSZKTN Men's Winter Cardigan Hoodie with Velvet Trim",
    image: "H29ae191037ae4f92a73dedb6f9975c8ck.webp",
    originalPrice: 4999,
    specialPrice: 177,
    offers: 3,
    extraOff: 128,
    rating: "4.3",
    reviews: "2236",
  },
  {
    id: 13,
    name: "Autumn Oversized Hoody Men's Zipper Cardigan",
    image: "product-image-1582511272-600x600.jpg",
    originalPrice: 499,
    specialPrice: 675,
    offers: 2,
    extraOff: 313,
    rating: "4.2",
    reviews: "2354",
  },
  {
    id: 14,
    name: "Classic Everyday Zip-Up Bomber Jacket",
    image: "H6b0d6b093f454ab4aff3b5cf921d72eca.webp",
    originalPrice: 1799,
    specialPrice: 349,
    offers: 1,
    extraOff: 211,
    rating: "4.6",
    reviews: "2450",
  },
];

const additionalProductImages = [
  "H158375c23262420489654f93d22c8194f.webp",
  "H1e2577102a844482a94df7c000b5ce39K.webp",
  "H2a75a1947867480bb99852de9e61ba39j.webp",
  "H384534d18e5f4bc5afa9d92ebd3f43e2Y.webp",
  "H5e16bcdead9448319aed27e843877073B.webp",
  "H787e356e9921446f9272fd650145d744S.webp",
  "H9abb1deeb5e5402caf0890b2c230216dc.webp",
  "Hcd8a3cacc5794c86913c01b45e5b7856b.webp",
  "Hd7e5dd40d80b4a5c853afd9c5ecb6944r.webp",
  "product-image-1493980668-600x600.jpg",
  "product-image-1520932354-600x600.jpg",
  "product-image-1659742613-600x600.jpg",
  "product-image-1722055607-600x600.jpg",
  "product-image-1753759764-600x600.jpg",
  "product-image-1758362268-600x600.jpg",
  "product-image-1800193760-600x600.jpg",
];

const catalogProducts = [
  ...defaultProducts,
  ...additionalProductImages.map((image, index) => ({
    id: defaultProducts.length + index + 1,
    name: `Men's Fashion Jacket Style ${defaultProducts.length + index + 1}`,
    image,
    originalPrice: 499,
    specialPrice: 99,
    offers: 0,
    extraOff: 0,
    rating: "New",
    reviews: "0",
  })),
];

const bannerImages = ["/assets/banners/bb1.jpg", "/assets/banners/bb2.jpg", "/assets/banners/bb3.jpg"];

const money = (amount) =>
  `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

const productImageSrc = (image) =>
  /^https?:\/\//i.test(image)
    ? image
    : image.startsWith("/")
      ? image
      : `/assets/products/${image}`;

const createUpiPaymentLink = (amount, upiId) => {
  const params = new URLSearchParams({
    pa: upiId,
    pn: "Lucky Private Ltd.",
    am: amount.toFixed(2),
    cu: "INR",
  });
  return `upi://pay?${params.toString()}`;
};

const paymentMethods = [
  { id: "phonepe", name: "PhonePe", offer: "20% Extra Discount By PhonePe", tone: "violet" },
  { id: "gpay", name: "GPay", offer: "20% Extra Discount By GPay", tone: "green" },
  { id: "paytm", name: "PayTM", offer: "15% Extra Discount By Paytm", tone: "blue" },
];

const sampleProductReviews = [
  { id: 1, name: "Riya", rating: 5, text: "Looks just like the pictures. Happy with the fit.", date: "Example review" },
  { id: 2, name: "Lucky", rating: 4, text: "Good value for the price and comfortable to wear.", date: "Example review" },
  { id: 3, name: "Manvi", rating: 5, text: "Nice quality and the delivery was smooth.", date: "Example review" },
  { id: 4, name: "Jiya", rating: 4, text: "The material feels good. The size guide was helpful.", date: "Example review" },
  { id: 5, name: "Rakesh", rating: 5, text: "A useful everyday style. Would recommend checking the size chart.", date: "Example review" },
];

const navItems = [
  { label: "Home", Icon: Home },
  { label: "Categories", Icon: Shirt },
  { label: "My Orders", Icon: Package },
  { label: "Help", Icon: BadgeHelp },
  { label: "Account", Icon: CircleUserRound },
];

function BannerCarousel({ onSelect }) {
  const [slide, setSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(
      () => {
        setTransitionEnabled(true);
        setSlide((current) => current + 1);
      },
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  function handleTransitionEnd() {
    if (slide === bannerImages.length) {
      setTransitionEnabled(false);
      setSlide(0);
    }
  }

  function showSlide(index) {
    setTransitionEnabled(true);
    setSlide(index);
  }

  return (
    <section className="hero-slider" aria-label="Sale banners">
      <div className="slides">
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${slide * 100}%)`,
            transition: transitionEnabled ? undefined : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...bannerImages, bannerImages[0]].map((image, index) => (
            <button
              type="button"
              className="slide"
              key={`${image}-${index}`}
              onClick={onSelect}
              aria-label={`Open sale banner ${(index % bannerImages.length) + 1}`}
              tabIndex={index === slide % bannerImages.length ? 0 : -1}
            >
              <img src={image} alt={`Lucky sale banner ${(index % bannerImages.length) + 1}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="slide-dots" aria-label="Choose banner">
        {bannerImages.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`slide-dot ${index === slide % bannerImages.length ? "dot-active" : ""}`}
            aria-label={`Show banner ${index + 1}`}
            aria-pressed={index === slide % bannerImages.length}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

function DailyDeals() {
  const [remaining, setRemaining] = useState(600);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining((current) => (current > 0 ? current - 1 : 600)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const timerMinutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const timerSeconds = String(remaining % 60).padStart(2, "0");

  return (
    <div className="daily-deals">
      <span className="deals-title">
        <Sparkles size={18} fill="#e11900" />
        Daily Deals
      </span>
      <span className="deals-timer">
        <img src="/assets/widgets/7tepb.png" alt="" />
        <span>{timerMinutes}m : {timerSeconds}s</span>
      </span>
    </div>
  );
}

function ProductReviewsAndBenefits() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState([]);
  const visibleReviews = showAllReviews
    ? sampleProductReviews
    : sampleProductReviews.slice(0, 3);

  function toggleHelpful(reviewId) {
    setHelpfulReviews((current) =>
      current.includes(reviewId)
        ? current.filter((id) => id !== reviewId)
        : [...current, reviewId],
    );
  }

  const ratingBreakdown = [
    { label: "Excellent", count: 3, tone: "excellent" },
    { label: "Very Good", count: 2, tone: "very-good" },
    { label: "Good", count: 0, tone: "good" },
    { label: "Average", count: 0, tone: "average" },
    { label: "Poor", count: 0, tone: "poor" },
  ];

  return (
    <section className="product-reviews-benefits" aria-label="Product ratings, reviews and benefits">
      <header className="product-reviews-heading">
        <h2>Product Ratings &amp; Reviews</h2>
        <span>EXAMPLE</span>
      </header>

      <p className="review-demo-disclaimer">Example reviews for preview only · not actual customer feedback</p>

      <div className="review-rating-overview">
        <div className="review-average">
          <strong>4.6 <Star size={15} fill="currentColor" /></strong>
          <span>5 example ratings</span>
          <span>5 example reviews</span>
        </div>
        <div className="review-rating-breakdown" aria-label="Example rating breakdown">
          {ratingBreakdown.map(({ label, count, tone }) => (
            <div className="rating-breakdown-row" key={label}>
              <span>{label}</span>
              <span className="rating-breakdown-track">
                <span
                  className={`rating-breakdown-fill ${tone}`}
                  style={{ width: `${count * 20}%` }}
                />
              </span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="demo-reviews-subheading">Example customer reviews</h3>
      <div className="demo-review-list">
        {visibleReviews.map((review) => {
          const isHelpful = helpfulReviews.includes(review.id);
          return (
            <article className="demo-review-card" key={review.id}>
              <div className="demo-review-meta">
                <strong>{review.name}</strong>
                <span className="demo-review-tag">Example</span>
              </div>
              <div className="demo-review-rating">
                <span>{review.rating.toFixed(1)} <Star size={11} fill="currentColor" /></span>
                <time>{review.date}</time>
              </div>
              <p>{review.text}</p>
              <button
                className={`demo-review-helpful ${isHelpful ? "is-helpful" : ""}`}
                type="button"
                aria-pressed={isHelpful}
                onClick={() => toggleHelpful(review.id)}
              >
                <ThumbsUp size={15} fill={isHelpful ? "currentColor" : "none"} />
                {isHelpful ? "Marked helpful" : "Helpful"}
              </button>
            </article>
          );
        })}
      </div>

      <button
        className="view-all-reviews"
        type="button"
        aria-expanded={showAllReviews}
        onClick={() => setShowAllReviews((visible) => !visible)}
      >
        {showAllReviews ? "Show fewer reviews" : "View all reviews"}
        <ChevronRight size={19} className={showAllReviews ? "reviews-expanded" : ""} />
      </button>

      <div className="product-benefits-demo" aria-label="Lucky benefits preview">
        <div className="product-benefit">
          <span className="benefit-icon"><BadgeCheck size={21} /></span>
          <strong>Lowest Price</strong>
        </div>
        <div className="product-benefit">
          <span className="benefit-icon"><IndianRupee size={21} /></span>
          <strong>Cash on Delivery</strong>
        </div>
        <div className="product-benefit">
          <span className="benefit-icon"><RotateCcw size={21} /></span>
          <strong>7-day Returns</strong>
        </div>
      </div>
      <p className="benefits-demo-disclaimer">Benefits preview · availability and return policy to be confirmed</p>
    </section>
  );
}

function ProductDetail({ product, products, onNavigate, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isSaved, setIsSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const [showCart, setShowCart] = useState(false);
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"];
  const discount = Math.round(
    (1 - (product.price ?? 99) / product.originalPrice) * 100,
  );

  useEffect(() => {
    document.title = `${product.name} — Lucky`;
  }, [product.name]);

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(""), 2500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  function addSelectedProduct() {
    if (!selectedSize) {
      setNotice("Please select a size");
      return false;
    }
    onAddToCart(product, selectedSize);
    setShowCart(true);
    return true;
  }

  return (
    <div className="detail-page">
      <header className="detail-header">
        <button
          className="plain-icon"
          type="button"
          aria-label="Back to products"
          onClick={() => onNavigate("/")}
        >
          <ArrowLeft size={23} />
        </button>
        <button className="detail-brand" type="button" onClick={() => onNavigate("/")}>
          lucky
        </button>
        <span className="header-spacer" />
        <button
          className={`plain-icon detail-heart ${isSaved ? "saved" : ""}`}
          type="button"
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isSaved}
          onClick={() => setIsSaved((saved) => !saved)}
        >
          <Heart size={23} fill={isSaved ? "currentColor" : "none"} />
        </button>
        <button
          className="plain-icon cart-icon"
          type="button"
          aria-label="View Lucky bag"
          onClick={() => onNavigate("/cart")}
        >
          <ShoppingCart size={23} />
        </button>
      </header>

      <main className="detail-content">
        <section className="detail-gallery" aria-label="Product images">
          <div className="detail-main-image">
            <img src={productImageSrc(product.image)} alt={product.name} />
          </div>
          <span className="gallery-indicator" />
          <div className="thumbnail-heading">1 Products Images</div>
          <button
            className="detail-thumbnail thumbnail-selected"
            type="button"
            aria-label="Show product image 1"
          >
            <img src={productImageSrc(product.image)} alt="" />
          </button>
        </section>

        <section className="detail-product-info">
          <div className="detail-title-row">
            <h1>{product.name}</h1>
            <button
              className="share-button"
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  setNotice("Product link copied");
                } catch {
                  setNotice("Copy this page URL to share the product");
                }
              }}
              aria-label="Share product"
            >
              <Copy size={17} />
              <span>Share</span>
            </button>
          </div>
          <div className="detail-price-row">
            <strong>{money(product.price ?? 99)}</strong>
            <del>{money(product.originalPrice)}</del>
            <span>{discount}% off</span>
          </div>
          {product.offers > 0 && (
            <p className="detail-special-offer">
              ₹{product.specialPrice} with {product.offers} Special Offers
            </p>
          )}
          <div className="detail-rating-row">
            <span className="rating-chip">{product.rating} ★</span>
            <span>Sample listing rating · {product.reviews} reviews</span>
          </div>
          <p className="detail-demo-note">
            Lucky demo · Prices, offers and listing details are sample content.
          </p>

          <section className="size-section">
            <div className="size-heading">
              <h2>Select Size</h2>
              {selectedSize && <span>Selected: {selectedSize}</span>}
            </div>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  className={selectedSize === size ? "size-selected" : ""}
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          <section className="delivery-information">
            <div className="delivery-icon"><Package size={18} /></div>
            <div>
              <h2>Free Delivery</h2>
              <p>Delivery and returns information is confirmed at checkout.</p>
            </div>
          </section>

          <details className="detail-accordion" open>
            <summary>Product Details <ChevronRight size={17} /></summary>
            <div className="accordion-copy">
              <p>{product.name}</p>
              <p>Category: Men's casual wear</p>
              <p>Choose a size above to add this item to your Lucky bag.</p>
            </div>
          </details>

          <ProductReviewsAndBenefits />

          <section className="detail-recommendations">
            <h2>Products For You</h2>
            <div className="product-grid">
              {products.filter((item) => item.id !== product.id).map((item) => {
                const discount = Math.round(
                  (1 - (item.price ?? 99) / item.originalPrice) * 100,
                );
                return (
                  <article className="product-card" key={item.id}>
                    <button
                      className="product-image-button"
                      type="button"
                      onClick={() => onNavigate(`/product/${item.id}`)}
                      aria-label={`View ${item.name}`}
                    >
                      <img
                        className="product-image"
                      src={productImageSrc(item.image)}
                        alt={item.name}
                        loading="lazy"
                      />
                      <span className="hot-sell">Hot Sell</span>
                    </button>
                    <div className="product-info">
                      <h2>{item.name}</h2>
                      <div className="price-line">
                        <strong>{money(item.price ?? 99)}</strong>
                        <del>{money(item.originalPrice)}</del>
                        <span>{discount}% off</span>
                      </div>
                      {item.offers > 0 && (
                        <p className="special-offer">
                          ₹{item.specialPrice} with {item.offers} Special Offers
                        </p>
                      )}
                      {item.extraOff > 0 && (
                        <p className="order-offer">
                          <span className="offer-check"><Check size={10} /></span>
                          ₹{item.extraOff} off | Order NOW
                        </p>
                      )}
                      <p className="free-delivery">Free Delivery</p>
                      <div className="rating-row">
                        <span className="rating-chip" aria-label={`Sample rating ${item.rating}`}>
                          {item.rating} ★
                        </span>
                        <span className="rating-reviews">{item.reviews} sample</span>
                        <span className="trusted-badge">
                          <span className="trusted-symbol">L</span>
                          Lucky demo
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </section>
      </main>

      <footer className="detail-bottom-bar">
        <button
          className="detail-add-button"
          type="button"
          onClick={addSelectedProduct}
        >
          <ShoppingCart size={17} /> Add to Cart
        </button>
        <button
          className="detail-buy-button"
          type="button"
          onClick={() => {
            if (!selectedSize) {
              setNotice("Please select a size");
              return;
            }
            onAddToCart(product, selectedSize);
            onNavigate("/cart");
          }}
        >
          <span>»</span> Buy Now
        </button>
      </footer>

      {notice && <div className="detail-toast" role="status">{notice}</div>}

      {showCart && (
        <div className="detail-cart-backdrop" onClick={() => setShowCart(false)}>
          <section
            className="detail-cart-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Added to Lucky bag"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="detail-cart-close"
              aria-label="Close"
              onClick={() => setShowCart(false)}
            >
              <X size={19} />
            </button>
            <span className="detail-cart-check"><Check size={19} /></span>
            <h2>Added to your Lucky bag</h2>
            <p>{product.name} · Size {selectedSize}</p>
            <div className="detail-cart-actions">
              <button type="button" onClick={() => { setShowCart(false); onNavigate("/"); }}>
                Continue shopping
              </button>
              <button type="button" onClick={() => { setShowCart(false); onNavigate("/cart"); }}>
                View Lucky Bag
              </button>
            </div>
            <small>Demo checkout only. No payment will be collected.</small>
          </section>
        </div>
      )}
    </div>
  );
}

function PaymentDemo({ total, upiId, onCreateOrder, onNavigate }) {
  const [selectedMethod, setSelectedMethod] = useState("phonepe");
  const [methodDialogOpen, setMethodDialogOpen] = useState(false);
  const [priceDetailsOpen, setPriceDetailsOpen] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const upiPaymentLink = createUpiPaymentLink(total, upiId);
  const activeMethod = paymentMethods.find(
    (method) => method.id === selectedMethod,
  );

  useEffect(() => {
    document.title = "Lucky — Payment demo";
  }, []);

  function handlePayNow() {
    if (createdOrder) {
      setQrDialogOpen(true);
      return;
    }
    const order = onCreateOrder(selectedMethod);
    if (!order) return;
    setCreatedOrder(order);
    setQrDialogOpen(true);
  }

  return (
    <div className="payment-demo-page">
      <main className="payment-demo-content">
        <header className="payment-page-header">
          <a className="payment-back" href="/" aria-label="Back to Lucky store">
            <ArrowLeft size={23} />
          </a>
          <h1>PAYMENT</h1>
          <span className="payment-brand">lucky</span>
        </header>

        <nav className="checkout-progress" aria-label="Checkout progress">
          {["Cart", "Address", "Payment", "Summary"].map((step, index) => {
            const complete = index < 2;
            const current = index === 2;
            return (
              <div
                className={`checkout-step ${complete ? "step-complete" : ""} ${
                  current ? "step-current" : ""
                }`}
                key={step}
                aria-current={current ? "step" : undefined}
              >
                <span className="step-circle">
                  {complete ? <Check size={12} strokeWidth={3} /> : index + 1}
                </span>
                <span className="step-label">{step}</span>
              </div>
            );
          })}
        </nav>

        <div className="demo-payment-notice" role="note">
          Pay Now shows a UPI QR · payment remains pending until manually verified
        </div>

        <section className="payment-method-section">
          <div className="payment-section-heading">
            <h2>Select Payment Method</h2>
            <span className="safe-payments">
              <span className="safe-shield">✓</span>
              <span>PAYMENT<br />DEMO</span>
            </span>
          </div>

          <div className="online-discount">
            <div className="payment-app-carousel" aria-label="PhonePe, Paytm and Google Pay">
              <div className="payment-app-track">
                {[false, true].map((isDuplicate) => (
                  <div
                    className="payment-app-set"
                    key={isDuplicate ? "duplicate" : "primary"}
                    aria-hidden={isDuplicate}
                  >
                    <span className="payment-app-logo phonepe-logo" aria-label={isDuplicate ? undefined : "PhonePe"}>
                      <span className="payment-app-mark">पे</span>
                    </span>
                    <span className="payment-app-logo paytm-logo" aria-label={isDuplicate ? undefined : "Paytm"}>
                      <span className="paytm-mark">paytm</span>
                    </span>
                    <span className="payment-app-logo gpay-logo" aria-label={isDuplicate ? undefined : "Google Pay"}>
                      <span className="gpay-mark"><i>G</i></span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <strong>Pay online &amp; get 30% EXTRA</strong>
          </div>

          <div className="pay-online-label"><span>PAY ONLINE</span></div>
          <button
            className="payment-method-trigger"
            type="button"
            onClick={() => setMethodDialogOpen(true)}
          >
            <span className="upi-icon">UPI</span>
            <span>{selectedMethod === "phonepe" ? "UPI(GPay/PhonePe/Paytm)" : activeMethod?.name}</span>
            <ChevronRight size={19} />
          </button>
        </section>

        <section className="payment-total-lines" aria-label="Order total">
          <div><span>Shipping:</span><strong>FREE</strong></div>
          <div><span>Total Product Price:</span><strong>{money(total)}</strong></div>
          <div className="payment-order-total"><span>Order Total:</span><strong>{money(total)}</strong></div>
        </section>

        <div className="payment-empty-space" />
      </main>

      <footer className="payment-bottom-bar">
        <button
          className="price-details-button"
          type="button"
          onClick={() => setPriceDetailsOpen(true)}
        >
          <strong>{money(total)}</strong>
          <span>VIEW PRICE DETAILS</span>
        </button>
        <button
          className="pay-now-button"
          type="button"
          onClick={handlePayNow}
        >
          {createdOrder ? "Show payment QR" : "Pay Now"}
        </button>
      </footer>

      {methodDialogOpen && (
        <div
          className="payment-modal-backdrop"
          onClick={() => setMethodDialogOpen(false)}
        >
          <section
            className="payment-method-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-method-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="payment-dialog-title">
              <h2 id="payment-method-dialog-title">Choose Payment Method</h2>
              <span>Lucky demo</span>
            </div>
            <div className="payment-method-options">
              {paymentMethods.map((method) => (
                <label
                  className={`payment-method-option ${
                    selectedMethod === method.id ? "method-selected" : ""
                  }`}
                  key={method.id}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => setSelectedMethod(method.id)}
                  />
                  <span className="method-option-copy">
                    <strong>{method.name}</strong>
                    <span className={`method-offer ${method.tone}`}>{method.offer}</span>
                  </span>
                  <span className={`method-monogram ${method.tone}`}>
                    {method.id === "phonepe" ? "पे" : method.id === "gpay" ? "G" : "P"}
                  </span>
                </label>
              ))}
            </div>
            <button
              className="payment-dialog-close"
              type="button"
              onClick={() => setMethodDialogOpen(false)}
            >
              Close
            </button>
          </section>
        </div>
      )}

      {qrDialogOpen && createdOrder && (
        <div
          className="payment-modal-backdrop"
          onClick={() => setQrDialogOpen(false)}
        >
          <section
            className="upi-qr-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="upi-qr-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="upi-qr-header">
              <div>
                <h2 id="upi-qr-title">Scan to pay</h2>
                <p>Order {createdOrder.id}</p>
              </div>
              <button
                type="button"
                className="plain-icon"
                aria-label="Close payment QR"
                onClick={() => setQrDialogOpen(false)}
              >
                <X size={20} />
              </button>
            </header>
            <strong className="upi-qr-amount">{money(total)}</strong>
            <div className="upi-qr-image">
              <QRCodeSVG
                value={upiPaymentLink}
                size={220}
                level="M"
                title={`UPI payment QR for ${money(total)}`}
              />
            </div>
            <p className="upi-qr-instructions">
              Scan with a UPI app on another phone. The amount is pre-filled.
            </p>
            <a className="upi-open-app-button" href={upiPaymentLink}>
              Open UPI app on this phone
            </a>
            <p className="upi-qr-pending-note">
              Payment is not verified automatically. Your order stays pending until Lucky confirms the transfer.
            </p>
            <button
              className="upi-order-status-button"
              type="button"
              onClick={() => onNavigate(`/order/${createdOrder.id}`)}
            >
              View order status
            </button>
          </section>
        </div>
      )}

      {priceDetailsOpen && (
        <div
          className="payment-modal-backdrop"
          onClick={() => setPriceDetailsOpen(false)}
        >
          <section
            className="price-details-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="price-details-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="payment-dialog-title">
              <h2 id="price-details-title">Price Details</h2>
              <button
                className="plain-icon"
                type="button"
                aria-label="Close price details"
                onClick={() => setPriceDetailsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="price-details-line"><span>Total Product Price</span><strong>{money(total)}</strong></div>
            <div className="price-details-line"><span>Shipping</span><strong>FREE</strong></div>
            <div className="price-details-line price-details-total"><span>Order Total</span><strong>{money(total)}</strong></div>
            <p>Demo preview only. No payment is collected.</p>
          </section>
        </div>
      )}

    </div>
  );
}

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman & Nicobar",
  "Chandigarh", "Dadra and Nagar Haveli", "Daman & Diu", "Delhi",
  "Lakshadweep", "Puducherry",
];

function CheckoutProgress({ currentStep }) {
  const steps = ["Cart", "Address", "Payment", "Summary"];
  return (
    <nav className="checkout-progress" aria-label="Checkout progress">
      {steps.map((step, index) => {
        const complete = index < currentStep;
        const current = index === currentStep;
        return (
          <div
            className={`checkout-step ${complete ? "step-complete" : ""} ${
              current ? "step-current" : ""
            }`}
            key={step}
            aria-current={current ? "step" : undefined}
          >
            <span className="step-circle">
              {complete ? <Check size={12} strokeWidth={3} /> : index + 1}
            </span>
            <span className="step-label">{step}</span>
          </div>
        );
      })}
    </nav>
  );
}

function CartCheckout({ cart, onNavigate, onChangeQuantity, onRemoveFromCart }) {
  const [priceDetailsOpen, setPriceDetailsOpen] = useState(false);
  const total = cart.reduce(
    (sum, item) => sum + (item.price ?? 99) * item.quantity,
    0,
  );

  useEffect(() => {
    document.title = "Lucky — Cart";
  }, []);

  return (
    <div className="checkout-demo-page">
      <main className="checkout-demo-content">
        <header className="payment-page-header">
          <button className="payment-back" type="button" onClick={() => onNavigate("/")}>
            <ArrowLeft size={23} />
          </button>
          <h1>CART</h1>
          <span className="payment-brand">lucky</span>
        </header>
        <CheckoutProgress currentStep={0} />
        {cart.length === 0 ? (
          <div className="checkout-empty">
            <ShoppingCart size={32} />
            <p>Your Lucky Bag is empty</p>
            <button type="button" onClick={() => onNavigate("/")}>Continue shopping</button>
          </div>
        ) : (
          <>
            <section className="checkout-cart-list" aria-label="Your cart">
              {cart.map((item) => {
                const key = `${item.id}:${item.size || ""}`;
                return (
                  <article className="checkout-cart-item" key={key}>
                    <img src={productImageSrc(item.image)} alt={item.name} />
                    <div className="checkout-cart-copy">
                      <h2>{item.name}</h2>
                      <div className="checkout-cart-price"><strong>{money(item.price ?? 99)}</strong><del>₹{item.originalPrice.toLocaleString("en-IN")}</del></div>
                      {item.size && <p>Size: {item.size}</p>}
                      <div className="quantity-control">
                        <button type="button" aria-label="Decrease quantity" onClick={() => onChangeQuantity(key, -1)}><Minus size={13} /></button>
                        <span>{String(item.quantity).padStart(2, "0")}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => onChangeQuantity(key, 1)}><Plus size={13} /></button>
                      </div>
                    </div>
                    <button className="remove-item" type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemoveFromCart(key)}><X size={16} /></button>
                  </article>
                );
              })}
            </section>
            <section className="checkout-price-summary">
              <div><span>Shipping:</span><strong>FREE</strong></div>
              <div><span>Total Product Price:</span><strong>{money(total)}</strong></div>
              <div className="checkout-order-total"><span>Order Total:</span><strong>{money(total)}</strong></div>
            </section>
            <footer className="checkout-bottom-bar">
              <button
                type="button"
                className="cart-price-details-button"
                onClick={() => setPriceDetailsOpen(true)}
              >
                <strong>{money(total)}</strong><span>VIEW PRICE DETAILS</span>
              </button>
              <button type="button" onClick={() => onNavigate("/address")}>Continue</button>
            </footer>
          </>
        )}
      </main>
      {priceDetailsOpen && (
        <div className="payment-modal-backdrop" onClick={() => setPriceDetailsOpen(false)}>
          <section
            className="price-details-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-price-details-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="payment-dialog-title">
              <h2 id="cart-price-details-title">Price Details</h2>
              <button className="plain-icon" type="button" aria-label="Close price details" onClick={() => setPriceDetailsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="price-details-line"><span>Total Product Price</span><strong>{money(total)}</strong></div>
            <div className="price-details-line"><span>Shipping</span><strong>FREE</strong></div>
            <div className="price-details-line price-details-total"><span>Order Total</span><strong>{money(total)}</strong></div>
          </section>
        </div>
      )}
    </div>
  );
}

function AddressDemo({ onNavigate, onSaveAddress }) {
  useEffect(() => {
    document.title = "Lucky — Shipping Address";
  }, []);

  function submitAddress(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const address = Object.fromEntries(formData.entries());
    onSaveAddress(address);
    onNavigate("/payment");
  }

  return (
    <div className="checkout-demo-page">
      <main className="checkout-demo-content">
        <header className="payment-page-header">
          <button className="payment-back" type="button" onClick={() => onNavigate("/cart")}>
            <ArrowLeft size={23} />
          </button>
          <h1>ADD DELIVERY ADDRESS</h1>
          <span className="payment-brand">lucky</span>
        </header>
        <CheckoutProgress currentStep={1} />
        <form className="address-form" onSubmit={submitAddress}>
          <h2><Package size={18} /> Address</h2>
          <label>
            <span>Full Name</span>
            <input name="name" type="text" placeholder="Full name" autoComplete="name" required />
          </label>
          <label>
            <span>Mobile number</span>
            <input name="number" type="tel" placeholder="Mobile number" autoComplete="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} title="Enter a 10-digit mobile number" required />
          </label>
          <label>
            <span>Pincode</span>
            <input name="pin" type="text" placeholder="PIN code" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} title="Enter a 6-digit PIN code" required />
          </label>
          <div className="address-city-state">
            <label>
              <span>City</span>
              <input name="city" type="text" placeholder="Town/City" autoComplete="address-level2" required />
            </label>
            <label className="address-state-field">
              <span>State</span>
              <select name="state" autoComplete="address-level1" defaultValue={indianStates[0]} required>
                {indianStates.map((state) => <option key={state}>{state}</option>)}
              </select>
            </label>
          </div>
          <label>
            <span>House No., Building Name</span>
            <input name="flat" type="text" placeholder="Flat, House.no, Building, Company" autoComplete="address-line1" required />
          </label>
          <label>
            <span>Road name, Area, Colony</span>
            <input name="area" type="text" placeholder="Area, Colony, Street, Sector, Village" autoComplete="address-line2" required />
          </label>
          <p className="checkout-demo-note">Demo only. Address details are not saved or sent anywhere.</p>
          <button className="address-submit" type="submit">Save Address and Continue</button>
        </form>
      </main>
    </div>
  );
}

function OrderConfirmation({ order, onNavigate }) {
  useEffect(() => {
    document.title = "Lucky — Order received";
  }, []);

  if (!order) {
    return (
      <section className="order-status-page">
        <h1>Order not found</h1>
        <button type="button" onClick={() => onNavigate("/")}>Back to Lucky</button>
      </section>
    );
  }

  const isConfirmed = order.status === "confirmed";
  const isRejected = order.status === "rejected";
  const headline = isConfirmed
    ? "Order confirmed"
    : isRejected
      ? "Payment not confirmed"
      : "Payment verification pending";

  return (
    <main className="order-status-page">
      <div className={`order-status-icon ${isConfirmed ? "order-confirmed" : ""}`}>
        <Check size={28} />
      </div>
      <p className="order-status-eyebrow">{isConfirmed ? "PAYMENT CONFIRMED" : isRejected ? "PAYMENT REJECTED" : "ORDER RECEIVED"}</p>
      <h1>{headline}</h1>
      <p className="order-status-copy">
        {isConfirmed
          ? "The admin has verified the payment and confirmed your order."
          : isRejected
            ? "The admin could not verify this payment. Please contact Lucky support."
            : "Your order is recorded. Lucky will confirm it after manually checking the payment. Do not treat this page as proof of payment."}
      </p>
      <section className="order-status-card">
        <div><span>Order ID</span><strong>{order.id}</strong></div>
        <div><span>Order time</span><strong>{new Date(order.createdAt).toLocaleString()}</strong></div>
        <div><span>Payment app</span><strong>{order.paymentMethod}</strong></div>
        <div><span>Amount</span><strong>{money(order.total)}</strong></div>
        <div>
          <span>Status</span>
          <strong className={`status-${order.status}`}>
            {isConfirmed ? "Payment confirmed" : isRejected ? "Payment rejected" : "Payment pending"}
          </strong>
        </div>
      </section>
      <p className="checkout-demo-note">
        Payment status is not verified automatically. The order stays pending until Lucky checks the UPI transfer.
      </p>
      <div className="order-status-actions">
        <button type="button" onClick={() => onNavigate("/my-orders")}>My Orders</button>
        <button type="button" onClick={() => onNavigate("/")}>Continue shopping</button>
      </div>
      <button className="admin-preview-link" type="button" onClick={() => onNavigate("/admin")}>
        Open admin review preview
      </button>
    </main>
  );
}

function MyOrders({ orders, onNavigate }) {
  useEffect(() => {
    document.title = "Lucky — My Orders";
  }, []);

  return (
    <main className="my-orders-page">
      <header className="my-orders-header">
        <button
          className="plain-icon"
          type="button"
          aria-label="Back to store"
          onClick={() => onNavigate("/")}
        >
          <ArrowLeft size={22} />
        </button>
        <h1>My Orders</h1>
        <span className="payment-brand">lucky</span>
      </header>
      <p className="my-orders-note">
        Orders placed in this browser session appear here. Refreshing or changing devices clears this demo history.
      </p>
      {orders.length === 0 ? (
        <section className="my-orders-empty">
          <Package size={34} />
          <h2>No orders yet</h2>
          <p>Your placed orders and payment status will appear here.</p>
          <button type="button" onClick={() => onNavigate("/")}>Start shopping</button>
        </section>
      ) : (
        <section className="my-orders-list" aria-label="Your orders">
          {orders.slice().reverse().map((order) => (
            <article className="my-order-card" key={order.id}>
              <header className="my-order-header">
                <div>
                  <span>Order ID</span>
                  <strong>{order.id}</strong>
                </div>
                <span className={`my-order-status status-${order.status}`}>
                  {order.status === "confirmed"
                    ? "Payment confirmed"
                    : order.status === "rejected"
                      ? "Payment rejected"
                      : "Payment pending"}
                </span>
              </header>
              <p className="my-order-date">{new Date(order.createdAt).toLocaleString()}</p>
              <div className="my-order-items">
                {order.items.map((item) => (
                  <div className="my-order-item" key={`${order.id}:${item.id}:${item.size || ""}`}>
                    <img src={productImageSrc(item.image)} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      {item.size && <span>Size: {item.size}</span>}
                      <span>Qty: {item.quantity}</span>
                    </div>
                    <strong>{money((item.price ?? 99) * item.quantity)}</strong>
                  </div>
                ))}
              </div>
              <div className="my-order-footer">
                <div><span>Payment</span><strong>{order.paymentMethod}</strong></div>
                <div><span>Order total</span><strong>{money(order.total)}</strong></div>
              </div>
              {order.address && (
                <address className="my-order-address">
                  <strong>Delivery address</strong>
                  <span>{order.address.name}, {order.address.number}</span>
                  <span>{order.address.flat}, {order.address.area}</span>
                  <span>{order.address.city}, {order.address.state} {order.address.pin}</span>
                </address>
              )}
              <button
                className="my-order-details-button"
                type="button"
                onClick={() => onNavigate(`/order/${order.id}`)}
              >
                View order status
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

function AdminOrdersDemo({
  orders,
  products,
  upiId,
  onUpdateOrder,
  onUpdateUpiId,
  onAddProduct,
  onNavigate,
}) {
  const [upiDraft, setUpiDraft] = useState(upiId);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    document.title = "Lucky — Admin panel";
  }, []);

  function saveUpiId(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextUpiId = String(formData.get("upiId") || "").trim();
    if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+$/i.test(nextUpiId)) {
      setNotice("Enter a valid UPI ID, for example name@bank");
      return;
    }
    onUpdateUpiId(nextUpiId);
    setUpiDraft(nextUpiId);
    setNotice("UPI ID updated for this browser session.");
  }

  function addProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const product = {
      name: String(formData.get("name") || "").trim(),
      image: String(formData.get("image") || "").trim(),
      price: Number(formData.get("price")),
      originalPrice: Number(formData.get("originalPrice")),
      specialPrice: Number(formData.get("price")),
      offers: 0,
      extraOff: 0,
      rating: "New",
      reviews: "0",
    };
    if (!product.name || !product.image || product.price <= 0 || product.originalPrice <= 0) {
      setNotice("Fill all product fields with valid values.");
      return;
    }
    onAddProduct(product);
    event.currentTarget.reset();
    setNotice("Product added to the storefront for this browser session.");
  }

  return (
    <main className="admin-demo-page">
      <header className="admin-demo-header">
        <div><span>LUCKY</span><h1>Admin panel</h1></div>
        <button type="button" onClick={() => onNavigate("/")}>Store</button>
      </header>
      <p className="admin-demo-warning">
        Demo only · no login or backend is configured. Products, UPI settings and orders are temporary and clear on refresh; this page is not safe for public admin use.
      </p>
      {notice && <p className="admin-form-notice" role="status">{notice}</p>}

      <section className="admin-settings-card">
        <h2>Payment UPI ID</h2>
        <p>New Pay Now links will use this UPI ID.</p>
        <form className="admin-form" onSubmit={saveUpiId}>
          <label>
            UPI ID
            <input
              name="upiId"
              value={upiDraft}
              onChange={(event) => setUpiDraft(event.target.value)}
              placeholder="name@bank"
              autoComplete="off"
              required
            />
          </label>
          <button type="submit">Save UPI ID</button>
        </form>
      </section>

      <section className="admin-settings-card">
        <h2>Add a product</h2>
        <p>Use an image filename from public/assets/products or a direct image URL.</p>
        <form className="admin-form admin-product-form" onSubmit={addProduct}>
          <label>
            Product name
            <input name="name" required maxLength={120} />
          </label>
          <label>
            Product image filename or URL
            <input name="image" placeholder="product-image.webp" required />
          </label>
          <div className="admin-form-row">
            <label>
              Sale price (₹)
              <input name="price" type="number" min="0.01" step="0.01" defaultValue="99" required />
            </label>
            <label>
              Original price (₹)
              <input name="originalPrice" type="number" min="0.01" step="0.01" defaultValue="499" required />
            </label>
          </div>
          <button type="submit">Add product</button>
        </form>
        <p className="admin-product-count">{products.length} products in this session</p>
      </section>

      <h2 className="admin-section-title">Payment orders</h2>
      {orders.length === 0 ? (
        <section className="admin-empty">No orders in this demo session yet.</section>
      ) : (
        <section className="admin-order-list">
          {orders.slice().reverse().map((order) => (
            <article className="admin-order-card" key={order.id}>
              <header>
                <div><strong>{order.id}</strong><span>{new Date(order.createdAt).toLocaleString()}</span></div>
                <b className={`admin-status admin-status-${order.status}`}>{order.status}</b>
              </header>
              <div className="admin-order-summary">
                <strong>{money(order.total)}</strong>
                <span>{order.paymentMethod}</span>
                <span>{order.items.map((item) => `${item.name}${item.size ? ` (${item.size})` : ""} × ${item.quantity}`).join(", ")}</span>
              </div>
              {order.address && (
                <address>
                  {order.address.name}, {order.address.number}<br />
                  {order.address.flat}, {order.address.area}<br />
                  {order.address.city}, {order.address.state} {order.address.pin}
                </address>
              )}
              {order.status === "pending" ? (
                <div className="admin-order-actions">
                  <button type="button" onClick={() => onUpdateOrder(order.id, "confirmed")}>Confirm payment</button>
                  <button type="button" onClick={() => onUpdateOrder(order.id, "rejected")}>Reject payment</button>
                </div>
              ) : (
                <p className="admin-action-note">Reviewed manually in this prototype.</p>
              )}
              <button className="admin-customer-status-link" type="button" onClick={() => onNavigate(`/order/${order.id}`)}>
                View customer status
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

function Storefront({ cart, products, onChangeQuantity, onRemoveFromCart, onNavigate }) {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    document.title = "Lucky — Everyday style, lovely prices";
  }, []);

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
  }, [search]);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + (item.price ?? 99) * item.quantity,
    0,
  );

  function selectNav(label) {
    setActiveNav(label);
    setMenuOpen(false);
    if (label === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (label === "Categories") {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (label === "My Orders") {
      onNavigate("/my-orders");
      return;
    }
    setNotice(`${label} section is a storefront demo`);
  }

  return (
    <div className="store-page">
      <header className="store-header">
        <div className="header-top">
          <button
            type="button"
            className="plain-icon menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <a className="brand" href="#" aria-label="Lucky home">
            <span className="brand-symbol">L</span>
            <span>lucky</span>
          </a>
          <div className="header-spacer" />
          <button
            type="button"
            className="plain-icon heart-icon"
            aria-label="Saved items"
            onClick={() => setNotice("Your saved items will appear here")}
          >
            <Heart size={24} fill="currentColor" />
          </button>
          <button
            type="button"
            className="plain-icon cart-icon"
            aria-label={`Shopping bag, ${cartCount} items`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={24} fill="currentColor" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>

        {menuOpen && (
          <div className="menu-popover">
            <button type="button" onClick={() => selectNav("Home")}>Home</button>
            <button type="button" onClick={() => selectNav("Categories")}>Categories</button>
            <button type="button" onClick={() => selectNav("My Orders")}>My Orders</button>
            <button type="button" onClick={() => selectNav("Help")}>Help</button>
            <button type="button" onClick={() => selectNav("Account")}>Account</button>
          </div>
        )}

        <label className="search-field">
          <Search size={19} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for Jackets, Hoodies, etc."
            aria-label="Search products"
          />
          {search && (
            <button
              type="button"
              className="clear-search"
              aria-label="Clear search"
              onClick={() => setSearch("")}
            >
              <X size={16} />
            </button>
          )}
        </label>
      </header>

      <main>
        <a
          href="#products"
          className="live-sale-banner"
          aria-label="Shop the sale"
        >
          <img src="/assets/widgets/mwccw.gif" alt="Sale is live" />
        </a>

        <BannerCarousel onSelect={() => selectNav("Categories")} />

        <div className="deal-marquee" aria-label="Buy two get one free offer">
          <div className="marquee-track">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                Buy 2 Get 1 Free (Add 3 item to cart) <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        <a className="offer-widget" href="#products" aria-label="View sale offers">
          <img
            src="/assets/widgets/xwgyl_800.webp"
            alt="Lucky festive sale offers"
          />
        </a>

        <DailyDeals />

        <section className="products-section" id="products">
          <div className="products-heading">
            <h1>Products For You</h1>
            <button
              type="button"
              className="filter-button"
              onClick={() => setNotice("Showing all Lucky picks")}
            >
              <span>Hot Sell</span>
              <ChevronRight size={14} />
            </button>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="product-grid">
              {visibleProducts.map((product) => {
                const discount = Math.round(
                  (1 - (product.price ?? 99) / product.originalPrice) * 100,
                );
                return (
                  <article className="product-card" key={product.id}>
                    <button
                      className="product-image-button"
                      type="button"
                      onClick={() => onNavigate(`/product/${product.id}`)}
                      aria-label={`View ${product.name}`}
                    >
                      <img
                        className="product-image"
                      src={productImageSrc(product.image)}
                        alt={product.name}
                        loading={product.id < 5 ? "eager" : "lazy"}
                      />
                      <span className="hot-sell">Hot Sell</span>
                    </button>
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <div className="price-line">
                        <strong>{money(product.price ?? 99)}</strong>
                        <del>{money(product.originalPrice)}</del>
                        <span>{discount}% off</span>
                      </div>
                      {product.offers > 0 && (
                        <p className="special-offer">
                          ₹{product.specialPrice} with {product.offers} Special Offers
                        </p>
                      )}
                      {product.extraOff > 0 && (
                        <p className="order-offer">
                          <span className="offer-check"><Check size={10} /></span>
                          ₹{product.extraOff} off | Order NOW
                        </p>
                      )}
                      <p className="free-delivery">Free Delivery</p>
                      <div className="rating-row">
                        <span className="rating-chip" aria-label={`Sample rating ${product.rating}`}>
                          {product.rating} ★
                        </span>
                        <span className="rating-reviews">{product.reviews} sample</span>
                        <span className="trusted-badge">
                          <span className="trusted-symbol">L</span>
                          Lucky demo
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <Search size={22} />
              <p>No products found</p>
              <button type="button" onClick={() => setSearch("")}>Clear search</button>
            </div>
          )}
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navItems.map(({ label, Icon }) => (
          <button
            type="button"
            className={`bottom-nav-item ${activeNav === label ? "nav-selected" : ""}`}
            key={label}
            onClick={() => selectNav(label)}
          >
            <span className="bottom-nav-icon">
              <Icon size={23} strokeWidth={1.45} />
            </span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {notice && (
        <div className="toast" role="status">
          <Check size={16} /> {notice}
        </div>
      )}

      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            aria-label="Lucky bag"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-heading">
              <button
                type="button"
                className="plain-icon"
                aria-label="Close bag"
                onClick={() => setCartOpen(false)}
              >
                <ArrowLeft size={22} />
              </button>
              <h2>Your Lucky Bag ({cartCount})</h2>
            </div>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingCart size={35} />
                <p>Your bag is empty</p>
                <button type="button" onClick={() => setCartOpen(false)}>
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={`${item.id}:${item.size || ""}`}>
                      <img
                        src={productImageSrc(item.image)}
                        alt={item.name}
                      />
                      <div className="cart-item-copy">
                        <h3>{item.name}</h3>
                        <strong>{money(item.price ?? 99)}</strong>
                        {item.size && <small>Size: {item.size}</small>}
                        <div className="quantity-control">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => onChangeQuantity(`${item.id}:${item.size || ""}`, -1)}
                          >
                            <Minus size={13} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => onChangeQuantity(`${item.id}:${item.size || ""}`, 1)}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => onRemoveFromCart(`${item.id}:${item.size || ""}`)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div><span>Delivery</span><strong>FREE</strong></div>
                  <div className="cart-total">
                    <span>Total</span><strong>{money(cartTotal)}</strong>
                  </div>
                  <p>UPI app opens after placing the order. Payment must be verified manually.</p>
                  <button
                    type="button"
                    className="checkout-button"
                    onClick={() => onNavigate("/cart")}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [cart, setCart] = useState([]);
  const [checkoutAddress, setCheckoutAddress] = useState(null);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState(catalogProducts);
  const [upiId, setUpiId] = useState("9982706764@fam");

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path) {
    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo(0, 0);
  }

  function addToCart(product, size = "") {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.size === size,
      );
      return existing
        ? current.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { ...product, size, quantity: 1 }];
    });
  }

  function changeQuantity(key, amount) {
    setCart((current) =>
      current
        .map((item) =>
          `${item.id}:${item.size || ""}` === key
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(key) {
    setCart((current) =>
      current.filter((item) => `${item.id}:${item.size || ""}` !== key),
    );
  }

  function addProduct(product) {
    setProducts((current) => [
      ...current,
      {
        ...product,
        id: Math.max(0, ...current.map((item) => item.id)) + 1,
      },
    ]);
  }

  function createPendingOrder(paymentMethod) {
    if (cart.length === 0) {
      navigate("/cart");
      return null;
    }
    const orderId = `LK-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      total: cart.reduce(
        (sum, item) => sum + (item.price ?? 99) * item.quantity,
        0,
      ),
      paymentMethod:
        paymentMethods.find((method) => method.id === paymentMethod)?.name ??
        paymentMethod,
      status: "pending",
      address: checkoutAddress,
      items: cart.map(({ id, name, image, size, quantity, price }) => ({
        id,
        name,
        image,
        size,
        quantity,
        price: price ?? 99,
      })),
    };
    setOrders((current) => [...current, order]);
    return order;
  }

  function updateOrderStatus(orderId, status) {
    setOrders((current) =>
      current.map((order) =>
        order.id === orderId && order.status === "pending"
          ? { ...order, status }
          : order,
      ),
    );
  }

  const normalizedPath = pathname.replace(/\/$/, "");
  if (normalizedPath === "/payment") {
    const total = cart.reduce(
      (sum, item) => sum + (item.price ?? 99) * item.quantity,
      0,
    );
    return (
      <PaymentDemo
        total={total}
        upiId={upiId}
        onCreateOrder={createPendingOrder}
        onNavigate={navigate}
      />
    );
  }
  if (normalizedPath === "/address") {
    return (
      <AddressDemo
        onNavigate={navigate}
        onSaveAddress={setCheckoutAddress}
      />
    );
  }
  if (normalizedPath === "/admin") {
    return (
      <AdminOrdersDemo
        orders={orders}
        products={products}
        upiId={upiId}
        onUpdateOrder={updateOrderStatus}
        onUpdateUpiId={setUpiId}
        onAddProduct={addProduct}
        onNavigate={navigate}
      />
    );
  }
  if (normalizedPath === "/my-orders") {
    return <MyOrders orders={orders} onNavigate={navigate} />;
  }
  const orderRoute = normalizedPath.match(/^\/order\/([^/]+)$/);
  if (orderRoute) {
    const order = orders.find((item) => item.id === decodeURIComponent(orderRoute[1]));
    return <OrderConfirmation order={order} onNavigate={navigate} />;
  }
  if (normalizedPath === "/cart") {
    return (
      <CartCheckout
        cart={cart}
        onNavigate={navigate}
        onChangeQuantity={changeQuantity}
        onRemoveFromCart={removeFromCart}
      />
    );
  }

  const productRoute = normalizedPath.match(/^\/product\/(\d+)$/);
  if (productRoute) {
    const product = products.find((item) => item.id === Number(productRoute[1]));
    if (product) {
      return (
        <ProductDetail
          product={product}
          products={products}
          onNavigate={navigate}
          onAddToCart={addToCart}
        />
      );
    }
  }

  return (
    <Storefront
      cart={cart}
      products={products}
      onChangeQuantity={changeQuantity}
      onRemoveFromCart={removeFromCart}
      onNavigate={navigate}
    />
  );
}

export default App;
