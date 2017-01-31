/*import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
} */


import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { SetupItemViewArgs } from "nativescript-angular/directives";

class Question {
    constructor(public name: string) { }
}


//The first question is taken from the Html Math Link. i.e. https://www.w3.org/MarkUp/html3/maths.html
//Second Question is with the general mathjax setup.
// The third question is with the mathjax librery. The mathjax setup is done acording to the mathjax cdn setup procedure.
// The reference for second and third question is http://docs.mathjax.org/en/latest/start.html
// rest are demo question from our question bank.  

let allQuestions = ['<MATH>&int;_a_^b^{f(x)<over>1+x} dx</MATH>', '<html><head><title>MathJax MathML Test Page</title><script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_CHTML"></script></head><body><p>When<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>&#x2260;</mo><mn>0</mn></math>,there are two solutions to<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo> <mi>b</mi><mi>x</mi><mo>+</mo> <mi>c</mi> <mo>=</mo><mn>0</mn></math>and they are<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>x</mi> <mo>=</mo><mrow><mfrac><mrow><mo>&#x2212;</mo><mi>b</mi><mo>&#x00B1;</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>&#x2212;</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow> <mn>2</mn><mi>a</mi> </mrow></mfrac></mrow><mtext>.</mtext></math></p></body></html>','<html><head><script type="text/javascript" async src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML"></script><script>window.MathJax = { MathML: { extensions: ["mml3.js", "content-mathml.js"]}};</script><title>MathML in HTML5</title></head><body><math><mrow><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math></body></html>','<html><head><script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML"></script></head><body><p>A ball is thrown upwards at a speed of 20 m/s. What is the maximum height it reaches before falling down?&nbsp;<math><mo>(</mo><mi>g</mi><mo>=</mo><mo>&#160;</mo><mn>10</mn><mo>&#160;</mo><mi>m</mi><mo>/</mo><msup><mi>s</mi><mn>2</mn></msup><mo>)</mo></math></p></body></html>', '<p>A ball is thrown upwards at a speed of 20 m/s. What is the maximum height it reaches before falling down?&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>(</mo><mi>g</mi><mo>=</mo><mo>&#160;</mo><mn>10</mn><mo>&#160;</mo><mi>m</mi><mo>/</mo><msup><mi>s</mi><mn>2</mn></msup><mo>)</mo></math></p>', '<p>A few friends shared some apples. Each person got <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="20px"><mfrac><mn>2</mn><mn>7</mn></mfrac></mstyle></math>&nbsp;portion of the total apples shared. The number of people and the apples can be&nbsp;</p>  ', '<p>Given below is the picture of a park.&nbsp;You can only jog along the direction of the arrows. The length and the breadth of the park are <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="36px"><mfrac><mn>3</mn><mn>4</mn></mfrac></mstyle></math>&nbsp;km and <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="36px"><mfrac><mn>1</mn><mn>4</mn></mfrac></mstyle></math>&nbsp;km respectively. George entered from A, ran around the park twice and exited from B. What distance did he cover?</p>  ', '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="18px"><mrow><mi>K</mi><mi>O</mi><mi>H</mi><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><msub><mi>H</mi><mn>2</mn></msub><mi>S</mi><msub><mi>O</mi><mn>4</mn></msub><mo>&#160;</mo><mo>&#8594;</mo><mo>&#160;</mo><msub><mi>K</mi><mn>2</mn></msub><mi>S</mi><msub><mi>O</mi><mn>4</mn></msub><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></mstyle></math></p>    <p>This is an example of</p>', '<p>Which of these when dissolved in water releases&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>H</mi><mo>+</mo></msup></math>ions?</p>  ', '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="36px"><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mo>&#xA0;</mo><mo>=</mo></mstyle></math></p>  ', '<p>Find the measure of <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="18px"><mrow><mo>&ang;</mo><mi>A</mi><mi>C</mi><mi>D</mi></mrow></mstyle></math>.</p>  ', '<p>What is the value of the denominator in <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="18px"><mfrac><mn>3</mn><mn>5</mn></mfrac></mstyle></math>?&nbsp;</p>  ', '<p>What is the value of the denominator in <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="18px"><mfrac><mn>3</mn><mn>5</mn></mfrac></mstyle></math>?&nbsp;</p>  ', '<p>What would be the reading of a weighing machine if <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="36px"><mn>8</mn><mfrac><mn>4</mn><mn>5</mn></mfrac></mstyle></math>&nbsp;packets of sugar are kept on it, where each packet weighs <math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle mathsize="36px"><mfrac><mn>5</mn><mn>11</mn></mfrac></mstyle></math>&nbsp;kg?</p>  ', '<p>A car starts from rest and accelerates at&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn><mo>&#160;</mo><mi>m</mi><mo>/</mo><msup><mi>s</mi><mn>2</mn></msup></math>&nbsp;in 5 seconds. Find the velocity.</p>  ', '<p>A nitrogen molecule is represented as&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi><mi>&#926;</mi><mi>N</mi></math>&nbsp;because</p>  '];

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public Questions: Array<Question>;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        this.Questions = [];

        for (let i = 0; i < allQuestions.length; i++) {
            this.Questions.push(new Question(allQuestions[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }


    //This function is called before creating a list view item. This is to check: Wheather can we call a function before creating a list view item. 
    public onSetupItemView(args: SetupItemViewArgs) {
        console.log(args.context+" "+args.index+" "+args.view);
        console.log(args.data.name);
        // Make the Data available to the view.
        args.view.context.content = args.data.name;
        // args.view.context.third = (args.index % 3 === 0);
        // args.view.context.header = ((args.index + 1) % items.length === 1);
        // args.view.context.footer = (args.index + 1 === items.length);

    }
}
