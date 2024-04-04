import React from 'react';

const Questions = () => {
    return (
        <div className='my-7 px-12'>
            <div className='text-center my-7'>
                <h3 className="text-4xl font-bold py-5">Frequently Asked Questions</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-medium">
                        What are the main differences between flex box and grid layout?
                    </div>
                    <div className="collapse-content">
                        <p>Grid and flexbox. The basic difference between CSS grid layout and CSS flexbox layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium">
                        What are the main differences between Bootstrap and Tailwind ?
                    </div>
                    <div className="collapse-content">
                        <p>Bootstrap is used for creating responsive web and mobile applications whereas Tailwind CSS is used to create customized user interfaces.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium">
                        What is css box model?
                    </div>
                    <div className="collapse-content">
                        <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium">
                        What is semantics tag?
                    </div>
                    <div className="collapse-content">
                        <p>

                            The "main" tag specifies the main content of a document. The content inside the "main" element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;