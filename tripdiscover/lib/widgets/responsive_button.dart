import 'package:flutter/material.dart';
import 'package:tripdiscover/utils/color_sets.dart';

class ResponsiveButton extends StatelessWidget {
  final double width;

  const ResponsiveButton({Key? key, this.width = 120.0}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: 50,
      decoration: BoxDecoration(
        color: ColorSets.mainColor,
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[Image.asset('images/button-one.png')],
      ),
    );
  }
}
