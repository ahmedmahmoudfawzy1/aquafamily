import React from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./CategoriesSection.css";

export default function CategoriesSection(props) {

  return (
    <div className="CategorySection">
      <CategoriesCard
        img="/assets/image/houseFilter.jpg"
        title="فلاتر معالجة منزلية"
        description="تناسب كل اسرة مصرية لتتمتع بشرب مياه صحية خالية من الملوثات غنية
        بالمعادن اجود خامات واقل سعر فى مصر
"
      />
      <CategoriesCard
        img="/assets/image/treatment.jpg "
        title="محطات تحلية"
        description="مهندسون متخصصون فى انشاء محطات محالجة المياه للقرى والمصانع والقرى 
      السياحية والمستشفيات
"
      />
      <CategoriesCard
        img="/assets/image/pecine.jpg"
        title="حمامات سباحة"
        description="تصميم وتنفيذ جميع حمامات السباحة والشلالات والنافورات

"
      />
      <CategoriesCard
        img="/assets/image/headFilter.jpg"
        title="منتجات اخري"
        description="وفير الماء بفضل تقنية لوف - وفر المزيد من الماء (ما يصل إلى 30% من الاستخدام) أثناء الاستحمام تحت ضغط الماء العادي، من خلال الثقب وتقنية الاختناق لوف  "
      />
    </div>
  );
}
