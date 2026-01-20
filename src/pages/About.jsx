import React from "react";
import image from "../assets/7.jpg";
import images from "../assets/10.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="flex-cont">
        <img className="about-image" src={images} alt="bread" width="210px" />
        <h1 className="about-title">About the bread on the leaven.</h1>
        <img className="about-image" src={image} alt="bread" width="210px" />
      </div>
      <h3>What is sourdough and how is it different from yeast?</h3>
      <p className="par-about">
        In breadmaking, sourdough isn't an ingredient added "according to a
        recipe," but a living culture that develops from a bare minimum: water
        and flour. Externally, it's a thick, slightly foamy mass, sometimes with
        a sour smell. But inside, it's a microcosm where wild yeast and lactic
        acid bacteria coexist, creating a fermentation environment. It's thanks
        to them that the dough rises and acquires its characteristic flavor.
        This process develops gradually. In the first few days, the sourdough
        isn't yet stable, but over time, the microorganisms reach a balance.
        When they are active, they begin to break down carbohydrates into simple
        sugars, producing gas and acids and this is what triggers the
        fermentation of the dough. Unlike industrial yeast, which acts quickly
        and predictably, natural sourdough produces a different result: a richer
        flavor, a coarser porosity, and a more elastic crumb. It can't be "added
        for convenience" it lives by its own rhythm and requires time. These
        characteristics create advantages that are difficult to achieve with
        industrial yeast. These include product stability, microbiological
        safety, and a complex flavor profile. In short, sourdough is more than
        just another way to raise dough. It's a distinct technology that gives
        bread unique properties. Here's how it works in practice: Creates an
        acidic environment: Lactic acid bacteria in the sourdough create a pH
        that inhibits the growth of mold and unwanted microorganisms. Improves
        flavor and texture: Longer fermentation produces a deeper flavor, a
        porous structure, and a supple crust. Provides longer shelf life:
        sourdough bread goes stale more slowly and stores better without
        preservatives.
      </p>
      <br></br>
      <h3>Fermentation and influence on the composition of bread.</h3>
      <p className="par-about">
        During sourdough bread making, a complex fermentation process occurs,
        involving the breakdown of carbohydrates and the development of
        microorganisms. This isn't just a simple "rising" of the dough, but a
        complete chemical transformation of its structure, flavor, and even
        nutritional value. As the dough ferments, yeast and lactic acid bacteria
        break down long starch chains into simple sugars. Yeast converts these
        into carbon dioxide and a small amount of alcohol, while bacteria
        convert them into lactic acid. Each of these substances influences the
        final result in its own way: the gas creates a loose crumb, the acid
        adds tartness, and the dough becomes softer and more tender. Sourdough
        contains far more bacteria than yeast—on average, 100 times more. These
        lactic acid bacteria dominate the environment and create conditions in
        which pathogenic microorganisms cannot survive. This ensures the
        microbiological safety of bread without the need for preservatives or
        stabilizers. The acidic environment created during fermentation not only
        affects the taste but also extends the shelf life of bread. This bread
        goes stale more slowly, and mold develops much later, especially if
        stored in conditions with reduced air circulation. And all this without
        any chemicals.
      </p>
      <br></br>
      <h3>Nutritional value and absorption of micronutrients.</h3>
      <p className="par-about">
        Sourdough bread is often made from the same flour as regular bread, but
        the method of preparation alters its nutritional value. This is because
        the lactic acid produced during fermentation neutralizes phytic acid, a
        natural substance in grains that blocks mineral absorption. Phytates
        bind with trace minerals such as zinc, magnesium, phosphorus, and iron
        and are excreted from the body. In bread made using standard yeast
        technology, these substances are almost unavailable for absorption.
        However, sourdough fermentation partially destroys phytic acid, allowing
        the body to obtain more valuable minerals even from the same flour. If
        we look at the trace minerals that become more available after
        fermentation, several key ones stand out: Zinc: important for immune
        function and tissue regeneration. Magnesium: involved in muscle function
        and blood pressure regulation. Phosphorus: essential for bone tissue and
        energy metabolism. Potassium: Supports electrolyte balance and heart
        function. In addition to minerals, fermentation also increases
        antioxidant levels. These substances help neutralize free
        radicals—unstable molecules that can damage cells. While not the primary
        source of antioxidants, it's a welcome addition to the other beneficial
        changes in bread.
      </p>
      <br></br>
      <h3>Effect on blood sugar levels.</h3>
      <p className="par-about">
        Not all breads affect glucose levels the same way after a meal. A
        distinctive feature of sourdough bread is its altered glycemic profile,
        which develops during fermentation. This isn't just about the glycemic
        index, but also about how the carbohydrates in the product behave in the
        gastrointestinal tract. Fermentation alters the starch structure. As a
        result, carbohydrates are broken down more slowly, and glucose enters
        the bloodstream gradually. Therefore, after eating this bread, blood
        sugar levels rise less sharply, and insulin levels are more moderate.
        There is also another factor: lactic acid, which forms during
        fermentation, can further inhibit the activity of some enzymes that
        break down starch, slowing its absorption. The reasons why sourdough
        bread has a milder effect on glucose levels are worth highlighting
        separately: Lower glycemic index: the carbohydrate structure is altered,
        which slows absorption. Lactic acid slows down the breakdown of glucose,
        promoting a more stable glycemic response. Fewer insulin spikes:
        especially noticeable when compared to bread made with compressed yeast.
      </p>
      <br></br>
      <h3>Improved digestion and effects on microbiota.</h3>
      <p className="par-about">
        Another benefit of sourdough bread is its potential impact on gut
        health. This isn't just about how it's digested, but also what it does
        to the microbiome after consumption. Its benefits are partly due to the
        formation of prebiotics during fermentation. Prebiotics are a form of
        fiber that isn't digested in the small intestine but instead serves as a
        food source for beneficial bacteria in the colon. They help strengthen
        the microbiota, boost short-chain fatty acid production, and support
        immune function. Sourdough bread is no exception among prebiotic foods.
        Thanks to natural fermentation, it contains trace amounts of substances
        that affect the microbiome. When prebiotics reach the colon, bacteria
        ferment them, producing short-chain fatty acids. These compounds have
        systemic effects they enter the bloodstream and participate in metabolic
        processes, reduce inflammation, and support the barrier function of the
        intestinal mucosa. Many people with sensitive digestion report that
        sourdough bread doesn't cause bloating or discomfort, unlike yeast
        bread. This is due to the partial breakdown of gluten and carbohydrates
        before they reach the stomach. However, this doesn't mean sourdough
        bread is safe for everyone there are exceptions.
      </p>
    </div>
  );
}

export default About;
