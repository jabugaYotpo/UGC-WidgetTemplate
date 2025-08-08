import { useState } from "react";
import Widget from "./components/Widget";
import QA from "./components/QA";
import PromotedProducts from "./components/PromotedProducts";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SEO from "./components/SEO";
import ReviewsTab from "./components/ReviewsTab";
import StarRating from "./components/StarRating";
import UgcGallery from "./components/UgcGallery";

function App() {
  const [appKey, setAppKey] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadYotpoScript = () => {
    if (!appKey) return;

    // Remove existing script if present
    const existing = document.getElementById("yotpo-script");
    if (existing) existing.remove();

    // Create new script
    const script = document.createElement("script");
    script.src = `https://cdn-widgetsrepository.yotpo.com/v1/loader/${appKey}`;
    script.async = true;
    script.id = "yotpo-script";
    document.body.appendChild(script);

    setScriptLoaded(true);
  };

  // Instance IDs
  let InstanceId_Widget = "430367";
  let InstanceId_QA = "1168979";
  let InstanceId_SEO = "991092";
  let InstanceId_Carousel = "1168985";
  let InstanceId_StarRating = "1168978";
  let InstanceId_PromotedProd = "1168980";
  let InstanceId_UgcGallery = "";
  let InstanceId_ReviewsTab = "1168981";

  // Product ID
  let ProductId = "";

  // Clipboard content
  let ClipBoardHeading = "Follow these steps to add this";
  let ScriptClipboard = "1. Add the following to your <head> tag.";
  let ScriptClipboardNote =
    "If you already have this script, please disregard since using one script will work for all of the Yotpo code snippets";
  let SnippetClipboard =
    "2. Add the following code snippet to your product page.";
  let SnippetClipboardNote =
    "Make sure you replace each data element with the appropriate values of your website and product attributes.";

  return (
    <>
      <div style={{ padding: "1.5rem", background: "#f9f9f9", borderBottom: "1px solid #ddd" }}>
        <h2>Load Yotpo Widget Script</h2>
        <input
          type="text"
          placeholder="Enter Yotpo App Key"
          value={appKey}
          onChange={(e) => setAppKey(e.target.value)}
          style={{ padding: "0.5rem", width: "300px" }}
        />
        <button
          onClick={loadYotpoScript}
          style={{
            padding: "0.5rem 1rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          Load Script
        </button>
        {scriptLoaded && (
          <p style={{ marginTop: "0.5rem" }}>
            ✅ Script loaded for App Key: <strong>{appKey}</strong>
          </p>
        )}
      </div>

      <div className="wrapper">
        <div className="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <QA
            instanceid={InstanceId_QA}
            productid={ProductId}
            active="false"
            heading="Q&A"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <SEO
            instanceid={InstanceId_SEO}
            productid={ProductId}
            active="false"
            heading="SEO"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsCarousel
            instanceid={InstanceId_Carousel}
            productid={ProductId}
            active="false"
            heading="Reviews Carousel"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            active="false"
            heading="Star Rating"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active="false"
            heading="Promoted Products"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <UgcGallery
            instanceid={InstanceId_UgcGallery}
            productid={ProductId}
            active="false"
            heading="UGC Gallery"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsTab instanceid={InstanceId_ReviewsTab} productid={ProductId} />
        </div>
      </div>
    </>
  );
}

export default App;
