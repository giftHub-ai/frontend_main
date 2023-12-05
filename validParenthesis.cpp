#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
typedef long long ll;
/*
"{{([])}}"
valid true
"{[}]" - not vlaid
false
({[
{}
()
[]

}{
*/
bool isCombinationOcc(char prev, char curr)
{
    if (prev == '{' && curr == '}')
        return true;
    else if (prev == '(' && curr == ')')
        return true;
    else if (prev == '[' && curr == ']')
        return true;
    else
        return false;
}

bool isValid(string str)
{
    stack<char> pStack;

    for (auto bracket : str)
    {
        if (pStack.empty())
        {
            pStack.push(bracket);
        }
        else
        {

            char lastBracket = pStack.top();
            if (isCombinationOcc(lastBracket, bracket))
            {
                pStack.pop();
            }
            else
            {
                pStack.push(bracket);
            }
        }
    }

    return pStack.empty() ? true : false;
}

int main()
{
    string input = "}}";
    cout<<isValid(input);
    return 0;
}