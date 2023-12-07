const Data = async () => {
  let faqs = null;
  async function getData() {
    const response = await fetch("http://localhost:4000/faqs");
    const data = await response.json();
    return data;
  }
  faqs = await getData();

  return (
    <div>
      {faqs.map((faq) => {
        return (
          <li key={faq.id}>
            <h2>
              <span>{faq.id}.</span>
              {faq.question}
              <span>
                {" "}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 43 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_648_20210)">
                    <ellipse
                      cx="21.5017"
                      cy="23.3923"
                      rx="20.4383"
                      ry="22.7092"
                      transform="rotate(30 21.5017 23.3923)"
                      fill="#212633"
                    ></ellipse>
                    <path
                      d="M28.5 26.1398L22.4133 19.9858L14.5 27.9858"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_648_20210">
                      <rect
                        width="42"
                        height="44.8767"
                        fill="white"
                        transform="translate(0.5 0.98584)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </h2>
            <p>{faq.answer}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Data;
