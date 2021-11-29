import 'package:flutter/material.dart';
import 'package:tripdiscover/utils/color_sets.dart';
import 'package:tripdiscover/widgets/title_text.dart';
import 'package:tripdiscover/widgets/sub_title_text.dart';
import 'package:tripdiscover/widgets/paragraph_text.dart';
import 'package:tripdiscover/utils/color_sets.dart';
import 'package:tripdiscover/widgets/responsive_button.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  List<String> images = [
    "welcome-one.png",
    "welcome-two.png",
    "welcome-three.png"
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: PageView.builder(
            scrollDirection: Axis.vertical,
            itemCount: images.length,
            itemBuilder: (_, index) {
              return Container(
                width: double.maxFinite,
                height: double.maxFinite,
                decoration: BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage("images/${images[index]}"),
                        fit: BoxFit.fill)),
                child: SafeArea(
                  child: Container(
                      margin:
                          const EdgeInsets.only(top: 100, left: 20, right: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              const TitleText(text: "Trips"),
                              const SubTitleText(text: "Mountain", size: 30),
                              const SizedBox(
                                height: 20,
                              ),
                              Container(
                                width: 250.0,
                                child: const ParagraphText(
                                  text:
                                      'Mountain hikes give you an incredible sense of freedom alogn with endurance test',
                                  color: ColorSets.textColor2,
                                ),
                              ),
                              const SizedBox(
                                height: 40,
                              ),
                              ResponsiveButton(),
                            ],
                          ),
                          Column(
                            children: List.generate(
                                3,
                                (indexDoted) => Container(
                                      width: 8.0,
                                      height: index == indexDoted ? 25.0 : 8,
                                      margin: const EdgeInsets.only(bottom: 8),
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(8),
                                          color: index == indexDoted
                                              ? ColorSets.mainColor
                                              : ColorSets.mainColor
                                                  .withOpacity(0.3)),
                                    )),
                          )
                        ],
                      )),
                ),
              );
            }));
  }
}
