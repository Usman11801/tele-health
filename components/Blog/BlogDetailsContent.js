import React from "react";
import Link from "next/link";
import CommentForm from "./CommentForm";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <img src="/images/blog/blog-details.jpg" alt="Blog" />
                  <h2>
                    More Than 80 Clinical Trials Launch to Test of The
                    Coronavirus
                  </h2>

                  <ul>
                    <li>
                      <Link href="/blog">
                        <i className="icofont-businessman"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel.
                  </p>
                </div>

                <div className="blog-details-previous">
                  <h3>
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written
                    by Cicero in 45 BC
                  </h3>
                  <ul>
                    <li>
                      1. Donec a purus at tellus rhoncus semper non sed tortor.
                    </li>
                    <li>
                      2. Etiam ut est laoreet, accumsan erat sed, ullamcorper
                      magna.
                    </li>
                    <li>
                      3. Nullam sit amet magna cursus, consectetur magna in,
                      faucibus erat.
                    </li>
                    <li>
                      4. Aenean vitae tortor pretium, sollicitudin urna at,
                      sollicitudin dui.
                    </li>
                    <li>5. Phasellus tempor velit sed leo viverra lacinia.</li>
                    <li>
                      6. Suspendisse quis sapien dapibus, sagittis ligula a,
                      rhoncus justo.
                    </li>
                  </ul>

                  <div className="prev-next">
                    <ul>
                      <li>
                        <a href="#">Previous</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CommentForm */}
              <CommentForm />
            </div>

            <div className="col-lg-4">
              {/* BlogSidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
