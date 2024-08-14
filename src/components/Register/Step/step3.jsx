import { useContext } from "react";
import { FormContext } from "./formContext";

function Form3({ onChange }) {
  const formData = useContext(FormContext);

  return (
    <>
      {formData.map((data) => {
        if (data.defaultValue.length > 5) {
          return (
            <div
              className="input-group input-w-lg-4 input-w-sm-full"
              key={data.name}
            >
              <div className="input-label">{data.label}</div>
              <input
                type="text"
                name={data.name}
                placeholder={data.defaultValue}
                value={data.value}
                onChange={(e) =>
                  onChange({ name: data.name, value: e.target.value })
                }
              />
            </div>
          );
        } else {
          return (
            <div
              className="input-group input-w-lg-3 input-w-sm-s3"
              key={data.name}
            >
              <div className="input-label">{data.label}</div>
              <input
                type="text"
                name={data.name}
                placeholder={data.defaultValue}
                value={data.value}
                onChange={(e) =>
                  onChange({ name: data.name, value: e.target.value })
                }
              />
            </div>
          );
        }
      })}
    </>
  );
}

export default function Step3({ onChange }) {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <Form3 onChange={({ name, value }) => onChange({ name, value })} />
        </div>
      </section>
    </form>
  );
}
