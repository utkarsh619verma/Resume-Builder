import Footer from "./footer";
import Intro from "./intro";
import Middleportion from "./middle_portion";
export default function CoverPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Intro />
      <Middleportion />
      <Footer />
    </div>
  );
}
