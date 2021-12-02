import 'package:flutter/material.dart';
import 'package:tripdiscover/widgets/sub_title_text.dart';
import 'package:tripdiscover/widgets/title_text.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreen createState() => _HomeScreen();
}

class _HomeScreen extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.white,
          leading: IconButton(
            onPressed: () {},
            icon: const Icon(
              Icons.menu,
              color: Colors.black54,
            ),
          ),
          actions: <Widget>[
            Container(
              margin: const EdgeInsets.only(right: 20, top: 10, bottom: 5),
              width: 40,
              // height: 40,
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.grey.withOpacity(0.5)),
            )
          ],
        ),
        body: Container(
          margin: const EdgeInsets.all(1),
          child: Column(
            children: <Widget>[
              const TitleText(text: 'Discover'),
              const SizedBox(
                height: 10,
              ),
              // // Tabbar
              DiscoverTabBarView(),
              // Text('hhh')
            ],
          ),
        ));
  }
}

class DiscoverTabBarView extends StatefulWidget {
  @override
  _DiscoverTabBarViewState createState() => _DiscoverTabBarViewState();
}

class _DiscoverTabBarViewState extends State<DiscoverTabBarView> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        initialIndex: 0,
        child: Column(
          children: <Widget>[
            const TabBar(
              labelColor: Colors.black,
              unselectedLabelColor: Colors.grey,
              // isScrollable: true,
              tabs: <Widget>[
                Tab(
                  text: 'Place',
                ),
                Tab(
                  text: 'Inspiration',
                ),
                Tab(
                  text: 'Emotions',
                ),
              ],
            ),
            // TabView
            Container(
              height: 100,
              child: TabBarView(
                children: <Widget>[Text('Hi'), Text('Two'), Text('Three')],
              ),
            )
          ],
        ));
  }
}
